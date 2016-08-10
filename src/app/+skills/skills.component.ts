import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, CardComponent } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'sfeir-skills',
  templateUrl: 'skills.component.html',
  styleUrls: ['skills.component.css'],
  directives: [CardComponent],
  providers: [PeopleService]
})
export class SkillsComponent implements OnInit {

  private people: any;
  private skill: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ppl: PeopleService
  ) {}

  ngOnInit() {
    this.route.params
      .map((params: any) => {
        this.skill = params.skill;
        return this.skill;
      })
      .flatMap(skill => this.ppl.fetchBySkill(skill))
      .subscribe(people => this.people = people);
  }

  navigateToSkill(skill) {
    this.router.navigateByUrl(`/skills/${skill}`);
  }

}
