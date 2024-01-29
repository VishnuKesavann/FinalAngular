import { TestBed } from '@angular/core/testing';

import { LabbillvmService } from './labbillvm.service';

describe('LabbillvmService', () => {
  let service: LabbillvmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabbillvmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
