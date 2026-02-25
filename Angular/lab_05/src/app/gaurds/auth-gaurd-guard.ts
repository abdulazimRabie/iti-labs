import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('username') && localStorage.getItem('password'))
      return true;

  const router = inject(Router);
  router.navigate(['/az/login']);
  localStorage.setItem("closedPathParam", route.params['id'])

  return false;
};
