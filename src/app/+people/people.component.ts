import { Component, OnInit } from '@angular/core';
import { PeopleCardComponent } from '../people-card/';

@Component({
  moduleId: module.id,
  selector: 'app-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  directives: [PeopleCardComponent]
})
export class PeopleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
