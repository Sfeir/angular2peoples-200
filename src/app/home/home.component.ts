import { Component, OnInit } from '@angular/core';
import { PersonComponent } from '../person/';
import { PeopleService } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ PersonComponent ]
})
export class HomeComponent implements OnInit {

  private person: any = {};

  constructor(
    private _service: PeopleService
  ) {
  }

  ngOnInit() {
    this.random();
  }

  random() {
    this._service.fetchRandom()
      .subscribe((person) => this.person = person);
  }

}
