import { Component, OnInit, Input } from '@angular/core';
import { PeopleCardComponent } from '../people-card/';
import { PeopleService } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [PeopleCardComponent],
  providers: [PeopleService]
})
export class HomeComponent implements OnInit {

  private person: any = {};

  @Input() input;

  constructor(private ppl: PeopleService) {}

  ngOnInit() {
    this.ppl.fetchRandom().subscribe((person) => this.person = person);
  }

}
