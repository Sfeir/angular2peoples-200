import { Component, OnInit } from '@angular/core';
import { NgLocalization } from '@angular/common';
import {
  CardComponent,
  SearchComponent,
  PeopleService,
  CustomLocalization
} from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  directives: [CardComponent, SearchComponent],
  providers: [
    PeopleService,
    {provide: NgLocalization, useClass: CustomLocalization}
  ]
})
export class PeopleComponent implements OnInit {

  private people: any = [];
  private filteredPeople: any = [];
  private query: string = '';
  private messageMapping: {[k:string]: string} = {
    '=0': 'No person found',
    '=1': 'Found one person',
    'other': 'Found # people'
  };

  constructor(private _service: PeopleService) {}

  ngOnInit() {
    this._service.fetch().subscribe((people) => {
      this.people = people;
      this.filteredPeople = people;
    });
  }

  onSearch(value) {
    this.filteredPeople = this.people.filter( (person) => {
      return person.firstname.toLowerCase().startsWith(value)
        || person.lastname.toLowerCase().startsWith(value);
      });
  }

  onDelete(person) {
    this._service.delete(person.id).subscribe((people) => {
        this.people = people;
        this.filteredPeople = people;
      }
    );
  }

}
