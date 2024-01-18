import { TestBed } from '@angular/core/testing';

import { TodayappService } from './todayapp.service';

describe('TodayappService', () => {
  let service: TodayappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
