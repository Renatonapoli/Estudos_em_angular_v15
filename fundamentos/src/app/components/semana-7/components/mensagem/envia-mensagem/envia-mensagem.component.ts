import { Component } from '@angular/core';
import { MensagemService } from '../../../service/mensagem.service';

@Component({
  selector: 'envia-mensagem',
  templateUrl: './envia-mensagem.component.html',
})
export class EnviaMensagemComponent {
  mensagem: string = '';

  constructor(private mensagemService: MensagemService) {}

  envia() {
    this.mensagemService.enviaMensagem(this.mensagem);
    this.mensagem = '';
  }
}
