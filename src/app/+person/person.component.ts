import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleCardComponent } from '../people-card/';
import { PeopleService } from '../shared/';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css'],
  directives: [PeopleCardComponent],
  providers: [PeopleService],
})
export class PersonComponent implements OnInit {

  private person: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ppl: PeopleService
  ) {}

  ngOnInit() {
    console.log(this.route.params)
    this.route.params
      .map((params: any) => params.id)
      .flatMap(id => this.ppl.fetchOne(id))
      .subscribe(person => this.person = person);
  }

  navigateToSkill(skill) {
    this.router.navigate(['skills', skill]);
  }

}
