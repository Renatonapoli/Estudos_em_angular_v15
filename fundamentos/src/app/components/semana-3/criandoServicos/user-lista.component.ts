import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/servico.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `
      .container {
        max-width: 600px;
        margin: auto;
      }
    `,
  ],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.user$.subscribe((users) => (this.users = users));
  }

  fetchUsers(): void {
    this.userService.fetchUsers();
  }

  addUser(): void {
    if (this.newUser.name && this.newUser.email) {
      const user: User = { ...this.newUser, id: Date.now() };
      this.userService.addUser(user);
      this.newUser = { id: 0, name: '', email: '' };
    }
  }

  removerUser(useId: number): void {
    this.userService.deleteUser(useId);
  }
}
