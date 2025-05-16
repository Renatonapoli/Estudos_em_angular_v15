import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() fechar = new EventEmitter<void>();

  contatoSelecionado: 'telefone' | 'email' | null = null;

  telefoneDigitado: string = '';
  emailDigitado: string = '';

  eventoSelecionado(tipo: 'telefone' | 'email') {
    this.telefoneDigitado = tipo;
    this.emailDigitado = tipo;

    console.log(this.telefoneDigitado);
    console.log(this.emailDigitado);
  }

  fecharModal() {
    this.fechar.emit();
  }

  voltar() {
    this.fechar.emit();
  }

  solicitar() {}
}
