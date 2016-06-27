import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MapsComponent, MapsInfoWindowComponent } from '../maps/';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../shared/';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'sfeir-locator',
  templateUrl: 'locator.component.html',
  styleUrls: ['locator.component.css'],
  directives: [MapsComponent, MapsInfoWindowComponent, ROUTER_DIRECTIVES],
  providers: [PeopleService]
})
export class LocatorComponent {

  private person: any = {
    geo: {lat: 0, lng: 0}
  };
  private link: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ppl: PeopleService
  ) {}

  ngOnInit() {
    this.route.params
      .map((params: any) => params.id)
      .flatMap(id => this.ppl.fetchOne(id))
      .subscribe(person => {
        this.person = person;
        this.link = this.buildPersonLink(person);
      });
  }

  buildPersonLink(person: any) {
    let tree = this.router.createUrlTree(['/people', person.id || '']);
    return this.router.serializeUrl(tree);
  }

}
