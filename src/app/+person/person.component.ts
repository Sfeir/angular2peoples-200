import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../shared/';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  private person: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ppl: PeopleService
  ) {}

  ngOnInit() {
    this.route.params
      .map((params: any) => params.id)
      .flatMap(id => this.ppl.fetchOne(id))
      .subscribe(person => this.person = person);
  }

  navigateToSkill(skill) {
    this.router.navigateByUrl(`/skills/${skill}`);
  }

}
