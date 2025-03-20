import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carro-component',
  templateUrl: './carros.component.html',
})
export class CarroComponent {
  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['login']);
  }

  navegarParaCarrosDeLuxo() {
    this.router.navigate(['dashboard/carros/luxo', '231']);
  }
}
