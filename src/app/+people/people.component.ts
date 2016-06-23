import { Component, OnInit } from '@angular/core';
import { PeopleCardComponent } from '../people-card/';
import { PeopleService } from '../shared/';
import { SearchComponent } from '../search/';
import { FilterPipe } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  directives: [PeopleCardComponent, SearchComponent],
  providers: [PeopleService],
  pipes: [FilterPipe]
})
export class PeopleComponent implements OnInit {

  private people: any = [];
  private query: string = '';

  constructor(private ppl: PeopleService) {}

  ngOnInit() {
    this.ppl.fetch().subscribe((people) => this.people = people);
  }

  onSearch(value) {
    this.query = value;
  }

}
