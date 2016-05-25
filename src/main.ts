import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angularpeople200AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angularpeople200AppComponent);

