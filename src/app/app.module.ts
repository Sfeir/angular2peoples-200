// CORE DEPS
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MdModule } from './md.module';
import { RoutesModule } from './routes.module';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home/';
import { PeopleComponent } from './people/';
import { CardComponent } from './shared/';

@NgModule({
  imports: [
    BrowserModule,
    MdModule,
    HttpModule,
    RoutesModule
  ],
  declarations: [
    HomeComponent,
    PeopleComponent,
    CardComponent,
    PeopleAppComponent
  ],
  providers: [ ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
