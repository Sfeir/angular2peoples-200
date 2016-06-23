import { Component, OnInit, Input } from '@angular/core';
import { PeopleCardComponent } from '../people-card/';
import { PeopleService } from '../people.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [PeopleCardComponent],
  providers: [PeopleService]
})
export class HomeComponent implements OnInit {

  private person: any = {};

  @Input() input;

  constructor(private ppl: PeopleService) {
    this.ppl.fetchRandom().subscribe((person) => this.person = person);
  }

  ngOnInit() {
    console.log(this.input);
  }

}