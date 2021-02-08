import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { storageFactory } from './shared/helper/factories/storage.factory';
import { STORAGE } from './shared/helper/injection-tokens/storage.injection-token';
import { LayoutModule } from './shared/layout/layout.module';

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
    { provide: STORAGE, useFactory: storageFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
