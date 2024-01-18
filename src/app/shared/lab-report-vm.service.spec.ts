import { TestBed } from '@angular/core/testing';

import { LabReportVMService } from './lab-report-vm.service';

describe('LabReportVMService', () => {
  let service: LabReportVMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabReportVMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
