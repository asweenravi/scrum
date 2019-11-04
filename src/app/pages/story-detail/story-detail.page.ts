import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.page.html',
  styleUrls: ['./story-detail.page.scss'],
})
export class StoryDetailPage implements OnInit {
  storyPoint;
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.storyPoint = this.router.url.split('/').pop();
  }

}
