import { Component, OnInit } from '@angular/core';
import { DataFeederService } from 'src/app/services/data-feeder.service';
import { debug } from 'util';

@Component({
  selector: 'app-view-story-point',
  templateUrl: './view-story-point.page.html',
  styleUrls: ['./view-story-point.page.scss'],
})
export class ViewStoryPointPage implements OnInit {
  storyPointList;
  story;
  constructor(private dataFeederService: DataFeederService) { }

  ngOnInit() {
    this.story = localStorage.getItem('story');
    this.getData();
  }

  getData() {
    this.dataFeederService.getStoryPoint().subscribe(res=>{
      console.log(res);
      debugger;
      this.storyPointList= res['record'].filter((item) => {
        if(item.story === this.story) {
          return item;
        }
      });
      console.log(this.storyPointList)
    })
  }

}
