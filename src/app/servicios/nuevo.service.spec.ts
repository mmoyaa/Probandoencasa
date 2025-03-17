import { TestBed } from '@angular/core/testing';

import { NUEVOService } from './nuevo.service';

describe('NUEVOService', () => {
  let service: NUEVOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NUEVOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
