import { TestBed } from '@angular/core/testing';

import { LoginWebService } from './login-web.service';

describe('LoginWebService', () => {
  let service: LoginWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
