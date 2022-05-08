import { TestBed } from '@angular/core/testing';

import { CalcValueService } from './calc-value.service';

describe('CalcValueService', () => {
  let service: CalcValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
