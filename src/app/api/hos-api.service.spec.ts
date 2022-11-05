import { TestBed } from '@angular/core/testing';

import { HosApiService } from './hos-api.service';

describe('HosApiService', () => {
  let service: HosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
