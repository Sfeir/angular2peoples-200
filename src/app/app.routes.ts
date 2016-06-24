import { provideRouter, RouterConfig } from '@angular/router';
import { PeopleComponent } from './+people/';
import { PersonComponent } from './+person/';
import { SkillsComponent } from './+skills/';
import { MapsComponent } from './+maps/';
import { HomeComponent } from './home/';

export const routes: RouterConfig = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'people/:id', component: PersonComponent},
  {path: 'skills/:skill', component: SkillsComponent},
  {path: 'map/:id', component: MapsComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
