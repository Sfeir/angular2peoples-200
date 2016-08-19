import { NgModule } from '@angular/core';
import { RouterModule, RouterConfig } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/';
import { PeopleComponent } from './people/';

const ROUTES: RouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent}
];

export const RoutesModule = RouterModule.forRoot(ROUTES, {useHash: true});
