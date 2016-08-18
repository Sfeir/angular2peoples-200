import { Component } from '@angular/core';
import { HomeComponent } from './home/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HomeComponent]
})
export class PeopleAppComponent {}
