import { Users } from './../assets/users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'users-component',
  templateUrl: './users.component.html',
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  arrayUsuarios: Users[] = [];

  ngOnInit(): void {
    this.usersService.getActiveUsers().subscribe((users) => {
      users.map((user) => this.arrayUsuarios.push(user));
    });
  }
}
