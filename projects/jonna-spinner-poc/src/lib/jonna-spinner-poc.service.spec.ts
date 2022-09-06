import { TestBed } from '@angular/core/testing';

import { JonnaSpinnerPocService } from './jonna-spinner-poc.service';

describe('JonnaSpinnerPocService', () => {
  let service: JonnaSpinnerPocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JonnaSpinnerPocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
