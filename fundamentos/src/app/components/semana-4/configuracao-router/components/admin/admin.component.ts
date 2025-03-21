import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private router: Router, private adminService: AdminService) {}

  setAdmin(isAdmin: boolean) {
    this.adminService.setAdmin(isAdmin);
    this.router.navigate(['/admin']);
  }

  get isAdmin() {
    return this.adminService.isAdmin();
  }
}
