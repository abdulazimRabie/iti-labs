import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('username') && !!localStorage.getItem('password');
  }
}
