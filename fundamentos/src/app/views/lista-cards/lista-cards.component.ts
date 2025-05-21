import { Component } from '@angular/core';

@Component({
  selector: 'lista-cards',
  templateUrl: './lista-card.component.html',
})
export class ListaCardsComponent {
  modalAberto: boolean = false;
  modalSucesso: boolean = true;
  modalSolicitarContato: boolean = false;

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  fecharModalSucesso() {
    this.modalSolicitarContato = false;
  }

  contatoEnviadoComSucesso() {
    this.modalSolicitarContato = true;
    this.fecharModal();
  }
}
