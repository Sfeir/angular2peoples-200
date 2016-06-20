import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PeopleAppComponent } from '../app/app.component';

beforeEachProviders(() => [PeopleAppComponent]);

describe('App: People', () => {
  it('should create the app',
      inject([PeopleAppComponent], (app: PeopleAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
