import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('token', '123456');
    this.router.navigate(['dashboard/lazy-loading']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
