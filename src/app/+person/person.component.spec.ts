/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PersonComponent } from './person.component';

describe('Component: Person', () => {
  it('should create an instance', () => {
    let component = new PersonComponent();
    expect(component).toBeTruthy();
  });
});
