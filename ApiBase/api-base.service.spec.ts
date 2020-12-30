import { TestBed } from '@angular/core/testing';

import { ApiBaseService } from './api-base.service';

describe('ApiBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiBaseService = TestBed.inject(ApiBaseService);
    expect(service).toBeTruthy();
  });
});
