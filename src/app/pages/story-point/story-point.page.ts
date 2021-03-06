import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-point',
  templateUrl: './story-point.page.html',
  styleUrls: ['./story-point.page.scss'],
})
export class StoryPointPage implements OnInit {
  dataArr:any;
  constructor(private router: Router) { }

  ngOnInit() {
    let data = this.getFibonacciSeries(10);
    this.dataArr = _.uniq(data);
  }

  getFibonacciSeries (n) {
    if (n===1) {
      return [0, 1];
    } else {
      let s = this.getFibonacciSeries(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  };
  goToStoryDetailPage(i) {
    this.router.navigate(['story-detail', i]);
  }

}
