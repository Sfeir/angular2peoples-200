/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PeopleService } from './people.service';

describe('People Service', () => {
  beforeEachProviders(() => [PeopleService]);

  it('should ...',
      inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
