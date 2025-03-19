import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'login-component',
  template: `
    <h1>Login Component</h1>
    <button (click)="dashboard()">Login</button>
  `,
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  dashboard() {
    this.authService.login();
  }
}
