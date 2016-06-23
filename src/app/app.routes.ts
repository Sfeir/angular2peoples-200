import { provideRouter, RouterConfig } from '@angular/router';
import { PeopleComponent } from './+people/';
import { PersonComponent } from './+person/';
import { HomeComponent } from './home/';

export const routes: RouterConfig = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'people/:id', component: PersonComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
