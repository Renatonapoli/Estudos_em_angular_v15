import { Component } from '@angular/core';

@Component({
  selector: 'botao-component',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss'],
})
export class BotaoComponent {
  formulario!: boolean;
  mudaCorBotao!: boolean;

  dadoLi: string = '';

  listaDeLi: string[] = [];

  inserirLi(valor: string) {
    this.listaDeLi.push(valor);
    this.dadoLi = '';
  }

  deletarLi(tarefa: string) {
    this.listaDeLi = this.listaDeLi.filter((item) => item !== tarefa);
  }

  mudaCor() {
    this.mudaCorBotao = !this.mudaCorBotao;
  }
}
