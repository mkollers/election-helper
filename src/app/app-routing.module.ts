import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'thesis/:index', loadChildren: () => import('./pages/thesis-page/thesis-page.module').then(m => m.ThesisPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
