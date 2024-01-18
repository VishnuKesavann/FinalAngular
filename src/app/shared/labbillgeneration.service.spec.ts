import { TestBed } from '@angular/core/testing';

import { LabbillgenerationService } from './labbillgeneration.service';

describe('LabbillgenerationService', () => {
  let service: LabbillgenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabbillgenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
