import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, MapsComponent } from '../shared/';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'sfeir-locator',
  templateUrl: 'locator.component.html',
  styleUrls: ['locator.component.css'],
  directives: [MapsComponent, ROUTER_DIRECTIVES],
  providers: [PeopleService]
})
export class LocatorComponent {

  private people: any[] = [{
    geo: {lat: 0, lng: 0}
  }];
  private selectedPerson: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ppl: PeopleService
  ) {}

  ngOnInit() {
    this.route.params
      .map((params: any) => params.id)
      .flatMap(id => id ? this.ppl.fetchOne(id) : this.ppl.fetch())
      .subscribe(people => {
        if(Array.isArray(people)) {
          this.people = people;
        }
        else {
          this.people = [people];
        }
      });
  }

}
