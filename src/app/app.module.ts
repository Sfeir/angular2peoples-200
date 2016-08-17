// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MD_MODULES } from './md.module';

// import { PeopleAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ...MD_MODULES
  ],
  declarations: [
    // PeopleAppComponent
  ],
  providers: [ ],
  bootstrap: [
    // PeopleAppComponent
  ]
})
export class AppModule { }
