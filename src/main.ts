import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { PeopleAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

const PROVIDERS = [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  MdIconRegistry,
  disableDeprecatedForms(),
  provideForms()
];

bootstrap(PeopleAppComponent, PROVIDERS);
