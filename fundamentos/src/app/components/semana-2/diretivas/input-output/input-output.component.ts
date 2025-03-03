import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent {
  valorTarefa!: string;

  arrayTarefas: string[] = ['Limpar casa', 'Lavar o carro'];

  inserirTarefaNaLista(novaTarefa: string) {
    if (novaTarefa.trim()) {
      this.arrayTarefas.push(novaTarefa);
      console.log(this.arrayTarefas);
    }
  }
}
