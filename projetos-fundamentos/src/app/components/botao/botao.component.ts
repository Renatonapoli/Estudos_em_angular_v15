import { Component } from '@angular/core';

@Component({
  selector: 'botao-component',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss'],
})
export class BotaoComponent {
  formulario!: boolean;
  mudaCorBotao!: boolean;

  mudaCor() {
    this.mudaCorBotao = !this.mudaCorBotao;
  }
}
