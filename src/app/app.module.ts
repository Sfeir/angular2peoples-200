// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdModule } from './md.module';

import { PeopleAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MdModule
  ],
  declarations: [
    PeopleAppComponent
  ],
  providers: [ ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
