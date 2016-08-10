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
    private route: ActivatedRoute,
    private router: Router,
    private ppl: PeopleService
  ) { }

  ngOnInit() {
    this.route.params
      .map((params: any) => params.id)
      .flatMap(id => this.ppl.fetchOne(id))
      .subscribe(person => this.person = person);
  }

}
