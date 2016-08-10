import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'sfeir-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {

  private isUpdateMode: boolean;
  @Input() model: any = {};
  @Output('onSubmit') submit$: EventEmitter<any>;
  @Output('onCancel') cancel$: EventEmitter<any>;

  form: FormGroup;

  constructor() {
    this.submit$ = new EventEmitter<any>();
    this.cancel$ = new EventEmitter<any>();

    this.form = new FormGroup({
      id: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      photo: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        postalCode: new FormControl(''),
      }),
      phone: new FormControl(''),
      isManager: new FormControl('')
    });
  }

  ngOnInit() {
    this.isUpdateMode = !this.model;
  }

  ngOnChanges(record) {
    if(record.model && record.model.currentValue) {
      this.model = record.model.currentValue;
      this.form.patchValue(this.model);
    }
  }

  submit() {
    this.submit$.emit(this.patchModel());
    this.model = {};
  }

  cancel() {
    this.cancel$.emit();
    this.model = {};
  }

  private patchModel() {
    for(let prop in this.form.value) {
      this.model[prop] = this.form.value[prop];
    }
    return this.model;
  }

}
