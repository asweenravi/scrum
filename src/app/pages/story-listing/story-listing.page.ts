import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-story-listing',
  templateUrl: './story-listing.page.html',
  styleUrls: ['./story-listing.page.scss'],
})
export class StoryListingPage implements OnInit {
  storyList = [
    {
      'number': 'ORANGE-21873',
      'title': 'MFA feature flag lift'
    },
    {
      'number': 'ORANGE-21875',
      'title': 'Reset MFA'
    }
  ]
  constructor(
    private router: Router,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async presentActionSheet(story) {
    localStorage.setItem('story',story.number)
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [{
        text: 'Do story pointing',
        handler: () => {
          this.goToStoryPointing();
        }
      }, {
        text: 'View Story points',
        handler: () => {
          this.goToAllStoryPoint();
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  goToStoryPointing() {
    this.router.navigate(['story-point']);
  }

  goToAllStoryPoint() {
    this.router.navigate(['view-story-point']);
  }

}
