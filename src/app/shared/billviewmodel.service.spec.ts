import { TestBed } from '@angular/core/testing';

import { BillviewmodelService } from './billviewmodel.service';

describe('BillviewmodelService', () => {
  let service: BillviewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillviewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
