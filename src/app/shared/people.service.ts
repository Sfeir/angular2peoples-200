import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private http: Http) {}

  fetch() {
    return this.http.get('http://localhost:3001/api/peoples/')
      .map( res => res.json() );
  }

  fetchRandom() {
    return this.http.get('http://localhost:3001/api/peoples/random')
      .map( res => res.json() );
  }

  fetchOne(id) {
    return this.http.get('http://localhost:3001/api/peoples/'+id)
      .map( res => res.json() );
  }
}
