import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-component',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  nome: string = 'Renato Napoli Guimarães';
  disabledBotao!: boolean;

  boasVindas(event: Event, mensagem: string) {
    alert(mensagem);
  }

  enviaNome(event: Event, mensagem: string) {
    mensagem = event.target as any;
  }

  habilitarBotao() {
    this.disabledBotao = !this.disabledBotao;
  }
}
