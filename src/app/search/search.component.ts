import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sfeir-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  private search: string;

  constructor() {}

  ngOnInit() {}

  onSearch(value) {}

}
