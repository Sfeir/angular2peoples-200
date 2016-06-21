import { Component, OnInit } from '@angular/core';
import { PeopleCardComponent } from '../people-card/';
import { PeopleService } from '../people.service';

@Component({
  moduleId: module.id,
  selector: 'app-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  directives: [PeopleCardComponent],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  private people: any = [];

  constructor(private ppl: PeopleService) {}

  ngOnInit() {
    this.ppl.fetch().subscribe((people) => this.people = people);
  }

}
