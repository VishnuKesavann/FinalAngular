import { TestBed } from '@angular/core/testing';

import { DoctorviewmodelService } from './doctorviewmodel.service';

describe('DoctorviewmodelService', () => {
  let service: DoctorviewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorviewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
