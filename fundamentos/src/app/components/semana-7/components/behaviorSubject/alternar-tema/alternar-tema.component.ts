import { Component } from '@angular/core';
import { AlterarTemaService } from '../../../service/alternar-tema.service';

@Component({
  selector: 'alternar-tema',
  templateUrl: './alternar-tema.component.html',
})
export class AlternarTemaComponent {
  constructor(private temaService: AlterarTemaService) {}

  alterarTema() {
    const novoTema =
      this.temaService.currentTema === 'claro' ? 'escuro' : 'claro';
    this.temaService.setTema(novoTema);
  }
}
