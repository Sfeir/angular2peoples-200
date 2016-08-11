import { Component, OnInit } from '@angular/core';
import { NgLocalization } from '@angular/common';
import { PeopleService, CustomLocalization } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css'],
  providers: [
    PeopleService,
    {provide: NgLocalization, useClass: CustomLocalization}
  ]
})
export class PeopleComponent implements OnInit {

  private dialogStatus = 'inactive';
  private people: any = [];
  private filteredPeople: any = [];
  private _lastValue: string = '';
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
    this._lastValue = value;
    this.filteredPeople = this._filter(this.people, this._lastValue);
  }

  onDelete(person) {
    this._service.delete(person.id)
      .subscribe((people) => {
        this.people = people;
        this.filteredPeople = this._filter(people, this._lastValue);;
      }
    );
  }

  showDialog() {
    this.dialogStatus = 'active';
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
  }

  onAdd(person) {
    this._service.create(person)
      .flatMap( _ => this._service.fetch() )
      .subscribe( people => {
        this.people = people;
        this.filteredPeople = people;
        this.hideDialog();
      })
  }

  private _filter(people, value) {
    return people.filter( (person) => {
      return person.firstname.toLowerCase().startsWith(value)
        || person.lastname.toLowerCase().startsWith(value);
      });
  }

}
