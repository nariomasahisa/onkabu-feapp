import { TestBed } from '@angular/core/testing';

import { SignupWebService } from './signup-web.service';

describe('SignupWebService', () => {
  let service: SignupWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
