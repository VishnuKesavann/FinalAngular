import { TestBed } from '@angular/core/testing';

import { LabprescriptionsService } from './labprescriptions.service';

describe('LabprescriptionsService', () => {
  let service: LabprescriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabprescriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
