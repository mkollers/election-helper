import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CONFIG } from 'src/config';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: CONFIG, useValue: require('../assets/root/config.json')}
  ]
})
export class AppServerModule {}
