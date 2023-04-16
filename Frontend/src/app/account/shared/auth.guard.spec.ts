import { TestBed } from '@angular/core/testing';
import { AuthServiceService } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthServiceService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthServiceService );
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
