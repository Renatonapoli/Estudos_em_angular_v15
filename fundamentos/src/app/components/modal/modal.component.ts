import { Component, EventEmitter, Output } from '@angular/core';
import { validaEmail } from 'src/app/utils/validaEmail.utils';
import { validaTelefone } from 'src/app/utils/validaTelefone.utils';

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
  telefoneInvalido = false;
  emailInvalido = false;

  validaTelefone = validaTelefone;
  validaEmail = validaEmail;

  eventoSelecionado(tipo: 'telefone' | 'email') {
    this.contatoSelecionado = tipo;
  }

  aplicaMascaraTelefone(event: any) {
    let valor = event.target.value.replace(/\D/g, '');
    if (valor.length > 11) valor = valor.slice(0, 11);

    const parte1 = valor.slice(0, 2);
    const parte2 = valor.length > 6 ? valor.slice(2, 7) : valor.slice(2, 6);
    const parte3 = valor.slice(valor.length > 6 ? 7 : 6);

    if (valor.length <= 10) {
      this.telefoneDigitado = `(${parte1}) ${parte2}-${parte3}`
        .trim()
        .replace(/[-\s]+$/, '');
    } else {
      this.telefoneDigitado = `(${parte1}) ${parte2}${
        parte3 ? '-' + parte3 : ''
      }`.trim();
    }
  }

  onTelefoneChange(valor: string) {
    this.telefoneDigitado = valor;
    this.telefoneInvalido = !validaTelefone(valor);
  }
  onEmailChange(valor: string) {
    this.emailDigitado = valor;
    this.emailInvalido = !validaEmail(valor);
  }

  permitirApenasNumeros(event: KeyboardEvent) {
    const apenasNumeros = /[0-9]/;
    if (!apenasNumeros.test(event.key)) {
      event.preventDefault();
    }
  }

  formularioValido(): boolean {
    if (this.contatoSelecionado === 'telefone') {
      return this.validaTelefone(this.telefoneDigitado);
    }

    if (this.contatoSelecionado === 'email') {
      return this.validaEmail(this.emailDigitado);
    }

    return false;
  }

  fecharModal() {
    this.fechar.emit();
  }

  voltar() {
    this.fechar.emit();
  }

  solicitar() {}
}
