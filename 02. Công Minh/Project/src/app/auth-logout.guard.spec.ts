import { TestBed } from '@angular/core/testing';

import { AuthLogoutGuard } from './auth-logout.guard';

describe('AuthLogoutGuard', () => {
  let guard: AuthLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
