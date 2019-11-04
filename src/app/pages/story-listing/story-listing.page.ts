import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-story-listing',
  templateUrl: './story-listing.page.html',
  styleUrls: ['./story-listing.page.scss'],
})
export class StoryListingPage implements OnInit {

  constructor(
    private router: Router,
    public actionSheetController: ActionSheetController
    ) { }

  ngOnInit() {
  }
  
  async presentActionSheet() {
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
