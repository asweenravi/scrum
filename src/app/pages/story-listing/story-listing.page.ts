import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-listing',
  templateUrl: './story-listing.page.html',
  styleUrls: ['./story-listing.page.scss'],
})
export class StoryListingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStoryPointing() {
    this.router.navigate(['story-point']);
  }
}
