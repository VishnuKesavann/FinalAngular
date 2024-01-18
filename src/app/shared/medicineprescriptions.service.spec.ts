import { TestBed } from '@angular/core/testing';

import { MedicineprescriptionsService } from './medicineprescriptions.service';

describe('MedicineprescriptionsService', () => {
  let service: MedicineprescriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineprescriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
