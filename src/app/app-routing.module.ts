import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'thesen/:index', loadChildren: () => import('./pages/thesis-page/thesis-page.module').then(m => m.ThesisPageModule) },
  { path: 'ergebnis', loadChildren: () => import('./pages/result-page/result-page.module').then(m => m.ResultPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
