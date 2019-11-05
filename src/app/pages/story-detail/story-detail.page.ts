import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFeederService } from 'src/app/services/data-feeder.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.page.html',
  styleUrls: ['./story-detail.page.scss'],
})
export class StoryDetailPage implements OnInit {
  storyPoint;
  userStoryPoint = {"name":"","story":"","point":""}
  constructor(
    private router:Router,
    private dataFeederService: DataFeederService
    ) { }

  ngOnInit() {
    this.storyPoint = this.router.url.split('/').pop();
    this.userStoryPoint.point = this.storyPoint;
    this.userStoryPoint.name = localStorage.getItem('name');
    this.userStoryPoint.story = localStorage.getItem('story');
    this.dataFeederService.addStoryPoint(this.userStoryPoint).subscribe(res=>{console.log(res)});
  }

  goToViewStoryPoints() {
    this.router.navigate(['view-story-point']);
  }

}
