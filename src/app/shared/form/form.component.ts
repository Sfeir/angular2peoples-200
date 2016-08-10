import { Component, OnInit, Input } from '@angular/core';
import { MD_DIRECTIVES } from '../../app.providers';

@Component({
  moduleId: module.id,
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
  directives: [MD_DIRECTIVES]
})
export class FormComponent implements OnInit {

  @Input() model: any = {};

  constructor() {}

  ngOnInit() {
  }

}
