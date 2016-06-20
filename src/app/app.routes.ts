import { provideRouter, RouterConfig } from '@angular/router';
import { PeopleComponent } from './+people/';

export const routes: RouterConfig = [
  {path: '/people', component: PeopleComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
