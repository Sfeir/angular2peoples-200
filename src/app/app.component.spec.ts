/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PeopleAppComponent } from '../app/app.component';

beforeEachProviders(() => [PeopleAppComponent]);

describe('App: People', () => {
  it('should create the app',
      inject([PeopleAppComponent], (app: PeopleAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
