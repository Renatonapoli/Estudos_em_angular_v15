import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component',
  template: `
    <h1>Dashboard - Componente</h1>
    <button (click)="logout()">Logout</button>
    <lazyLoading-component></lazyLoading-component>
  `,
})
export class DashboardComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
