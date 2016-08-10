import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent, PeopleService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'sfeir-update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css'],
  directives: [FormComponent],
  providers: [PeopleService]
})
export class UpdateComponent implements OnInit {

  person: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: PeopleService
  ) { }

  ngOnInit() {
    this._route.params
      .map((params: any) => params.id)
      .flatMap(id => this._service.fetchOne(id))
      .subscribe(person => this.person = person);
  }

  submit(person) {
    this._service.update(person).subscribe(
      res => console.log(person.id, 'has been updated')
    );
  }

  cancel() {
    this._router.navigate(['/people']);
  }

}
