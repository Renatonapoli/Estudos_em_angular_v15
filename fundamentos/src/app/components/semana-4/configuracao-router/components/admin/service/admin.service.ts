import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }

  setAdmin(isAdmin: boolean) {
    localStorage.setItem('isAdmin', String(isAdmin));
  }
}
