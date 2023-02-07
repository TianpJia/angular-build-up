import { CanActivateFn, Router, ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const activate = inject(ActivatedRoute);
  console.log('canActivate called', router.url);
  if (authService.isLoggedIn) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
  //   return true;
};
