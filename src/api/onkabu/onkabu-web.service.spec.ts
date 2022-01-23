import { TestBed } from '@angular/core/testing';

import { OnkabuWebService } from './onkabu-web.service';

describe('OnkabuWebService', () => {
  let service: OnkabuWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnkabuWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
