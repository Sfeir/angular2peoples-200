import { provideRouter, RouterConfig } from '@angular/router';
import { PeopleComponent } from './+people/';
import { PersonComponent } from './+person/';
import { SkillsComponent } from './+skills/';
import { LocatorComponent } from './+locator/';
import { HomeComponent } from './home/';

export const routes: RouterConfig = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'people/:id', component: PersonComponent},
  {path: 'skills/:skill', component: SkillsComponent},
  {path: 'locator/:id', component: LocatorComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
