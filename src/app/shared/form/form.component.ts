import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_DIRECTIVES } from '../../app.providers';

@Component({
  moduleId: module.id,
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
  directives: [MD_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class FormComponent implements OnInit {

  @Input() model: any = {};
  @Output('onSubmit') submit$: EventEmitter<any>;

  constructor() {
    this.submit$ = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  submit() {
    this.submit$.emit(this.model);
  }

}
