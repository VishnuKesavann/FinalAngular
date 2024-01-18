import { TestBed } from '@angular/core/testing';

import { ConsultbillService } from './consultbill.service';

describe('ConsultbillService', () => {
  let service: ConsultbillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultbillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
