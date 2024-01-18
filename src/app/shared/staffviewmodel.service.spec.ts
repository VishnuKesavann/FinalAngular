import { TestBed } from '@angular/core/testing';

import { StaffviewmodelService } from './staffviewmodel.service';

describe('StaffviewmodelService', () => {
  let service: StaffviewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffviewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
