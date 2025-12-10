import { TestBed } from '@angular/core/testing';

import { ExportFormService } from './export-form-service';

describe('ExportFormService', () => {
  let service: ExportFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
