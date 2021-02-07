import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultPageRoutingModule } from './result-page-routing.module';
import { ResultPageComponent } from './result-page.component';


@NgModule({
  declarations: [ResultPageComponent],
  imports: [
    CommonModule,
    ResultPageRoutingModule
  ]
})
export class ResultPageModule { }
