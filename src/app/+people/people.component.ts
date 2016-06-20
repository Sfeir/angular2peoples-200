import { Component, OnInit } from '@angular/core';
import { MD_DIRECTIVES } from '../app.providers';

@Component({
  moduleId: module.id,
  selector: 'app-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  directives: [MD_DIRECTIVES]
})
export class PeopleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
