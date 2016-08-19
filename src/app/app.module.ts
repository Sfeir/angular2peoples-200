// CORE DEPS
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MdModule } from './md.module';
import { RoutesModule } from './routes.module';

import { PeopleAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MdModule,
    HttpModule,
    RoutesModule
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
