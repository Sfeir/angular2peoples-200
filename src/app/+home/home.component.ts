import { Component, OnInit, Input } from '@angular/core';
import { PeopleService, CardComponent } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  private person: any = {};

  @Input() input;

  constructor(private ppl: PeopleService) {}

  ngOnInit() {
    this.ppl.fetchRandom().subscribe((person) => this.person = person);
  }

}
