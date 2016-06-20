import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_DIRECTIVES } from '../app.providers';

@Component({
  moduleId: module.id,
  selector: 'people-card',
  templateUrl: 'people-card.component.html',
  styleUrls: ['people-card.component.css'],
  directives: [MD_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class PeopleCardComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
