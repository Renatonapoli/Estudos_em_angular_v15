import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true' ? true : false;
  }

  setAdmin(isAdmin: boolean) {
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
  }
}
