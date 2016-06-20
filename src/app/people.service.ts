import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private http: Http) {}

  fetch() {
    return this.http.get('http://people.sfeir.com/person/all')
      .map( res => res.json() );
  }

}
