import { TestBed } from '@angular/core/testing';

import { PatientviewService } from './patientview.service';

describe('PatientviewService', () => {
  let service: PatientviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
