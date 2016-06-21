import { provideRouter, RouterConfig } from '@angular/router';
import { PeopleComponent } from './+people/';
import { HomeComponent } from './home/';

export const routes: RouterConfig = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
