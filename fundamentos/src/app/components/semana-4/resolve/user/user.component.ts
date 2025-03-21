import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-component',
  template: `
    <h2>Perfil do Usuário</h2>
    <p>{{ user.nome }}</p>
    <p>{{ user.email }}</p>
  `,
})
export class UserComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
  }
}
