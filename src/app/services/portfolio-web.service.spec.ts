import { TestBed } from '@angular/core/testing';

import { PortfolioWebService } from './portfolio-web.service';

describe('PortfolioWebService', () => {
  let service: PortfolioWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
