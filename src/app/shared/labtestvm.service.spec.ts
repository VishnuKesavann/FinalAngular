import { TestBed } from '@angular/core/testing';

import { LabtestvmService } from './labtestvm.service';

describe('LabtestvmService', () => {
  let service: LabtestvmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtestvmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
