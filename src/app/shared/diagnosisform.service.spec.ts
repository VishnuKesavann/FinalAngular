import { TestBed } from '@angular/core/testing';

import { DiagnosisformService } from './diagnosisform.service';

describe('DiagnosisformService', () => {
  let service: DiagnosisformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
