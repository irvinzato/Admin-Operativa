import { TestBed } from '@angular/core/testing';

import { CashDifferencesService } from './cash-differences.service';

describe('CashDifferencesService', () => {
  let service: CashDifferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashDifferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
