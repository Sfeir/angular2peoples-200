import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';

@Injectable()
export class PeopleService {

  constructor(private http: Http) {}

  fetch() {
    return this.http.get('http://localhost:3001/api/peoples/')
      .map( res => res.json() );
  }

  fetchRandom() {
    return this.http.get('http://localhost:3001/api/peoples/')
      .map( res => res.json() )
      .combineLatest( people => people[Math.floor(Math.random() * people.length)] );
  }
}
