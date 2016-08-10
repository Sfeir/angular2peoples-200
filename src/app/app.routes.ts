import { provideRouter, RouterConfig } from '@angular/router';
import { PeopleComponent } from './+people/';
import { PersonComponent } from './+person/';
import { SkillsComponent } from './+skills/';
import { LocatorComponent } from './+locator/';
import { UpdateComponent } from './+update/';
import { HomeComponent } from './+home/';

export const ROUTES: RouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'people/:id', component: PersonComponent},
  {path: 'skills/:skill', component: SkillsComponent},
  {path: 'locator', component: LocatorComponent},
  {path: 'locator/:id', component: LocatorComponent},
  {path: 'edit/:id', component: UpdateComponent}
];
