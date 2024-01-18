import { TestBed } from '@angular/core/testing';

import { GetidvmService } from './getidvm.service';

describe('GetidvmService', () => {
  let service: GetidvmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetidvmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
