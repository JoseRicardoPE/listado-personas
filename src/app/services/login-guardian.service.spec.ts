import { TestBed } from '@angular/core/testing';

import { LoginGuardianService } from './login-guardian.service';

describe('LoginGuardianService', () => {
  let service: LoginGuardianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginGuardianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
