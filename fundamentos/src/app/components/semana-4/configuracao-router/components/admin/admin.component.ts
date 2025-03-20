import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private router: Router) {}

  setAdmin(isAdmin: boolean) {
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
    this.router.navigate(['/']);
  }
}
