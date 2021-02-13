import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqPageRoutingModule } from './faq-page-routing.module';
import { FaqPageComponent } from './faq-page.component';


@NgModule({
  declarations: [FaqPageComponent],
  imports: [
    CommonModule,
    FaqPageRoutingModule
  ]
})
export class FaqPageModule { }
