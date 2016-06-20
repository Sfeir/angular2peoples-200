import { provideRouter, RouterConfig } from '@angular/router';
import { PeopleComponent } from './+people/';
import { HomeComponent } from './home/';

export const routes: RouterConfig = [
  {path: '', redirectTo: 'people'},
  {path: 'people', component: HomeComponent},
  {path: 'people/:email', component: PeopleComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
