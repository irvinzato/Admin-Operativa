import { TestBed } from '@angular/core/testing';

import { OperationCaptureService } from './operation-capture.service';

describe('OperationCaptureService', () => {
  let service: OperationCaptureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationCaptureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
