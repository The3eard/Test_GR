import { TestBed } from '@angular/core/testing';

import { NumberChangeService } from './number-change.service';

describe('NumberChangeService', () => {
  let service: NumberChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberChangeService);
  });

  it('Should change number via BehaviourSubject/Observable', () => {
    service.setCurrentNumber(3);
    expect(service.getCurrentNumber()).toEqual(3);
  });
});
