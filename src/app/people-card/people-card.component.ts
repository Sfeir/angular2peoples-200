import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_DIRECTIVES } from '../app.providers';

@Component({
  moduleId: module.id,
  selector: 'sfeir-people-card',
  templateUrl: 'people-card.component.html',
  styleUrls: ['people-card.component.css'],
  directives: [MD_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class PeopleCardComponent {

  @Input('expand') isExpanded: boolean = false;
  @Input() person: any;
  @Output('onSkillSelected') filterBySkill$: EventEmitter<string>;

  constructor() {
    this.filterBySkill$ = new EventEmitter<string>();
  }

  searchBySkill(skill) {
    this.filterBySkill$.emit(skill);
  }

}
