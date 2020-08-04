import { TestBed } from '@angular/core/testing';

import { MandateApiService } from './mandate-api.service';

describe('MandateApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MandateApiService = TestBed.get(MandateApiService);
    expect(service).toBeTruthy();
  });
});
