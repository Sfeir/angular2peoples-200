import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  private person: any = {};

  constructor(
    private _service: PeopleService
  ) {}

  ngOnInit() {
    this.random();
  }

  random() {
    this._service.fetchRandom().subscribe((person) => this.person = person);
  }

}
