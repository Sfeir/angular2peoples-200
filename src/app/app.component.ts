import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdInput } from '@angular2-material/input';
import { PeopleComponent } from './+people';

@Component({
  moduleId: module.id,
  selector: 'people-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MdToolbar, MdInput],
  encapsulation: ViewEncapsulation.None
})
export class PeopleAppComponent {

}
