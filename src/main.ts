import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { Angularpeople200AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

const PROVIDERS = [
  HTTP_PROVIDERS,
  MdIconRegistry
];

bootstrap(Angularpeople200AppComponent, PROVIDERS);
