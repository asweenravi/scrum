import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'story-point', loadChildren: () => import('./pages/story-point/story-point.module').then( m => m.StoryPointPageModule)},
  { path: 'story-point', loadChildren: () => import('./pages/story-point/story-point.module').then( m => m.StoryPointPageModule)},
  { path: 'story-detail/:id', loadChildren: () => import('./pages/story-detail/story-detail.module').then(m => m.StoryDetailPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
