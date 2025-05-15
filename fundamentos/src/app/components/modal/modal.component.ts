import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() fechar = new EventEmitter<void>();

  eventoSelecionado() {}

  fecharModal() {
    this.fechar.emit();
  }

  voltar() {
    this.fechar.emit();
  }

  solicitar() {}
}
