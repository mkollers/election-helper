import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThesisPageRoutingModule } from './thesis-page-routing.module';
import { ThesisPageComponent } from './thesis-page.component';


@NgModule({
  declarations: [ThesisPageComponent],
  imports: [
    CommonModule,
    ThesisPageRoutingModule
  ]
})
export class ThesisPageModule { }
