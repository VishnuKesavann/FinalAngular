import { TestBed } from '@angular/core/testing';

import { PatienthisService } from './patienthis.service';

describe('PatienthisService', () => {
  let service: PatienthisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatienthisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
