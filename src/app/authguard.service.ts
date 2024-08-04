import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthguardService {

//   // constructor() { }
// }
export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  // const auth = localStorage.setItem('token', true) ;
  const auth = JSON.parse(localStorage.getItem('token') ?? 'false') as boolean;
  if (!auth) {
    router.navigate(['/']);
  }
  return auth;
};
