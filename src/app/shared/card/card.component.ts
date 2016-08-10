import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_DIRECTIVES } from '../../app.providers';

@Component({
  moduleId: module.id,
  selector: 'sfeir-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  directives: [MD_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class CardComponent {

  @Input('expand') isExpanded: boolean = false;
  @Input('skill') selectedSkill: string;
  @Output('onSkillSelected') filterBySkill$: EventEmitter<string>;
  @Output('onDelete') delete$: EventEmitter<any>;
  @Input() person: any;

  constructor() {
    this.filterBySkill$ = new EventEmitter<string>();
    this.delete$ = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  searchBySkill(skill) {
    this.filterBySkill$.emit(skill);
  }

  delete(user) {
    this.delete$.emit(user);
  }

}
