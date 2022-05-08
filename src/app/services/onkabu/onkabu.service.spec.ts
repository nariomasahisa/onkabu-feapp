import { TestBed } from '@angular/core/testing';

import { OnkabuService } from './onkabu.service';

describe('OnkabuService', () => {
  let service: OnkabuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnkabuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
