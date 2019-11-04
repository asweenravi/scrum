import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewStoryPointPage } from './view-story-point.page';

const routes: Routes = [
  {
    path: '',
    component: ViewStoryPointPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewStoryPointPage]
})
export class ViewStoryPointPageModule {}
