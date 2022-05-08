import { TestBed } from '@angular/core/testing';

import { CalcValueWebService } from './calc-value-web.service';

describe('CalcValueWebService', () => {
  let service: CalcValueWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcValueWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
