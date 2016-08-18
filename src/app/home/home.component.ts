import { Component, OnInit } from '@angular/core';
import { PersonComponent } from '../person/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ PersonComponent ]
})
export class HomeComponent implements OnInit {

  name = 'Angular 2';

  constructor() {
  }

  ngOnInit() {
  }

}
