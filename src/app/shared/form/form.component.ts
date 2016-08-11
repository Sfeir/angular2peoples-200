import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    this.form = this._buildForm();
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
    this.submit$.emit(this._patchModel(this.model, this.form.value));
    this._reset();
  }

  cancel() {
    this.cancel$.emit();
    this._reset();
  }

  private _reset() {
    this.form = this._buildForm();
  }

  private _buildForm() {
    return new FormGroup({
      id: new FormControl(''),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        postalCode: new FormControl('')
      }),
      phone: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('0[0-9]{9}')
      ])),
      isManager: new FormControl('')
    });
  }

  private _patchModel(model: any, form: any) {
    for(let prop in form) {
      model[prop] = form[prop];
    }
    return model;
  }

}
