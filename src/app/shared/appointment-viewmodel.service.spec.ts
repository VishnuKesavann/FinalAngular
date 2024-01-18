import { TestBed } from '@angular/core/testing';

import { AppointmentViewmodelService } from './appointment-viewmodel.service';

describe('AppointmentViewmodelService', () => {
  let service: AppointmentViewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentViewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
