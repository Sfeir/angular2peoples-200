import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_DIRECTIVES } from './app.providers';
import { PeopleComponent } from './+people/';

@Component({
  moduleId: module.id,
  selector: 'root-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_DIRECTIVES]
})
export class PeopleAppComponent {

  constructor() {}

}
