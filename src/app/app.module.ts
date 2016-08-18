// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MD_MODULES } from './md.module';

import { HomeComponent } from './home/';
import { PeopleAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ...MD_MODULES
  ],
  declarations: [
    PeopleAppComponent,
    HomeComponent
  ],
  providers: [ ],
  bootstrap: [
    HomeComponent
  ]
})
export class AppModule { }
