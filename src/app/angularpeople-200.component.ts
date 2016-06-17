import { Component, ViewEncapsulation } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdInput } from '@angular2-material/input';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PeopleComponent } from './+people';

@Component({
  moduleId: module.id,
  selector: 'angularpeople-200-app',
  templateUrl: 'angularpeople-200.component.html',
  styleUrls: ['angularpeople-200.component.css'],
  directives: [ROUTER_DIRECTIVES, MdToolbar, MdInput],
  providers: [ROUTER_PROVIDERS],
  encapsulation: ViewEncapsulation.None
})
@Routes([
  {path: '/people', component: PeopleComponent}
])
export class Angularpeople200AppComponent {

}
