import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../data/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  private person: any = {};

  constructor() { }

  ngOnInit() {
    this.person = PEOPLE[0];
  }

}
