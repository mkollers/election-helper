import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { ThesisPageRoutingModule } from './thesis-page-routing.module';
import { ThesisPageComponent } from './thesis-page.component';

@NgModule({
  declarations: [ThesisPageComponent],
  imports: [
    CommonModule,
    ThesisPageRoutingModule,

    // Material
    MatExpansionModule
  ]
})
export class ThesisPageModule { }
