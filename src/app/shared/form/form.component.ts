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

  private isUpdateMode: boolean;
  @Input() model: any = {};
  @Output('onSubmit') submit$: EventEmitter<any>;
  @Output('onCancel') cancel$: EventEmitter<any>;

  constructor() {
    this.submit$ = new EventEmitter<any>();
    this.cancel$ = new EventEmitter<any>();
  }

  ngOnInit() {
    this.isUpdateMode = !this.model;
  }

  submit() {
    this.submit$.emit(this.model);
  }

  cancel() {
    this.cancel$.emit(this.model);
  }

}
