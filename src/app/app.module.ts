import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { STORAGE } from './shared/storage.injection-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,

    // Custom
    LayoutModule
  ],
  providers: [
    { provide: STORAGE, useValue: sessionStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
