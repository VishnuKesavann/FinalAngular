import { TestBed } from '@angular/core/testing';

import { LabreportgenerationService } from './labreportgeneration.service';

describe('LabreportgenerationService', () => {
  let service: LabreportgenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabreportgenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
