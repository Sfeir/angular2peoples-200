import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sfeir-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  @Output('onSearch') event$: EventEmitter<string>;
  private token: string;

  constructor() {
    this.event$ = new EventEmitter<string>();
  }

  ngOnInit() {}

  search() {
    this.event$.emit(this.token);
  }

}
