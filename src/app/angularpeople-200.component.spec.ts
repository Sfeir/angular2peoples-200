import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angularpeople200AppComponent } from '../app/angularpeople-200.component';

beforeEachProviders(() => [Angularpeople200AppComponent]);

describe('App: Angularpeople200', () => {
  it('should create the app',
      inject([Angularpeople200AppComponent], (app: Angularpeople200AppComponent) => {
    expect(app).toBeTruthy();
  }));
});
