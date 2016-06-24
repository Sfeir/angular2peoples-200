import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL: string = 'http://localhost:3001';

@Injectable()
export class PeopleService {

  constructor(private http: Http) {}

  fetch() {
    return this.http.get(`${BASE_URL}/api/peoples`)
      .map( res => res.json() );
  }

  fetchRandom() {
    return this.http.get(`${BASE_URL}/api/peoples/random`)
      .map( res => res.json() );
  }

  fetchOne(id) {
    return this.http.get(`${BASE_URL}/api/peoples/${id}`)
      .map( res => res.json() );
  }

  fetchBySkill(skill) {
    return this.http.get(`${BASE_URL}/api/peoples/skill/${skill}`)
      .map( res => res.json() );
  }
}
