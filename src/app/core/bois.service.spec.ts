import { TestBed } from '@angular/core/testing';

import { BoisService } from './bois.service';

describe('BoisService', () => {
  let service: BoisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
