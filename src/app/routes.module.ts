import { NgModule } from '@angular/core';
import { RouterModule, RouterConfig } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/';

const ROUTES: RouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

export const RoutesModule = RouterModule.forRoot(ROUTES, {useHash: true});
