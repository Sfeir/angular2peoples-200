// CORE DEPS
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MdModule } from './md.module';
import { RoutesModule } from './routes.module';

import { PeopleAppComponent } from './app.component';
import { HomeComponent } from './home/';
import { PeopleComponent } from './people/';
import { UpdateComponent } from './update/';
import { CardComponent, FormComponent } from './shared/';

@NgModule({
  imports: [
    BrowserModule,
    MdModule,
    HttpModule,
    RoutesModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    PeopleComponent,
    CardComponent,
    FormComponent,
    UpdateComponent,
    PeopleAppComponent
  ],
  providers: [ ],
  bootstrap: [
    PeopleAppComponent
  ]
})
export class AppModule { }
