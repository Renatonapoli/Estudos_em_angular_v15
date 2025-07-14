import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-contato',
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.scss'],
})
export class ModalContatoComponent {
  title = 'modal-contato';

  contatos: 'telefone' | 'email' | null = null;
  telefone: string = '';
  email: string = '';

  @Output() fechar = new EventEmitter<void>();
  @Output() abrirModal = new EventEmitter<{ contato: string; valor: string }>();

  contatoSelecionado(contato: 'telefone' | 'email') {
    this.contatos = contato;
  }

  fecharModal() {
    this.fechar.emit();
  }

  solicitarContato() {
    let valor = '';

    if (this.contatos === 'telefone') {
      valor = this.telefone;
    } else if (this.contatos === 'email') {
      valor = this.email;
    }

    const contatoEnviado = { contato: this.contatos!, valor };
    console.log(contatoEnviado);

    this.abrirModal.emit(contatoEnviado);
  }
}
