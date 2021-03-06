import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'story-point', loadChildren: () => import('./pages/story-point/story-point.module').then( m => m.StoryPointPageModule)},
  { path: 'story-detail/:id', loadChildren: () => import('./pages/story-detail/story-detail.module').then(m => m.StoryDetailPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'story-listing', loadChildren: () => import('./pages/story-listing/story-listing.module').then( m => m.StoryListingPageModule)},
  { path: 'view-story-point', loadChildren: './pages/view-story-point/view-story-point.module#ViewStoryPointPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
