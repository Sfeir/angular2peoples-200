import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon]
})
export class PeopleComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
