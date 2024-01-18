import { TestBed } from '@angular/core/testing';

import { PharmacistViewModelService } from './pharmacist-view-model.service';

describe('PharmacistViewModelService', () => {
  let service: PharmacistViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacistViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
