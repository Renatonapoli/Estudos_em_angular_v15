import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent {
  valorTarefa!: string;
  valorFiltrado!: string;

  valorTarefaEditado: string | null = null;
  novoValorTarefaEditado!: string;

  arrayTarefas: string[] = ['Limpar casa', 'Lavar o carro'];
  novoArrayTarefas: string[] = [...this.arrayTarefas];

  inserirTarefaNaLista(novaTarefa: string) {
    if (novaTarefa.trim()) {
      this.arrayTarefas.push(novaTarefa);
      this.novoArrayTarefas = [...this.arrayTarefas];
    }
  }

  filtrarListaItem(itemFiltrado: string) {
    this.novoArrayTarefas = this.arrayTarefas.filter((item) =>
      item.toLowerCase().includes(itemFiltrado.toLowerCase())
    );
  }

  deletar(tarefaDeletado: string) {
    this.arrayTarefas = this.arrayTarefas.filter(
      (item) => item !== tarefaDeletado
    );
    this.novoArrayTarefas = [...this.arrayTarefas];
  }

  editar(valor: string) {
    this.valorTarefaEditado = valor;
    this.novoValorTarefaEditado = valor;
  }

  salvar(valorEditado: { antigo: string; novo: string }) {
    const index = this.arrayTarefas.indexOf(valorEditado.antigo);
    if (index !== -1) {
      this.arrayTarefas[index] = valorEditado.novo;
      this.novoArrayTarefas = [...this.arrayTarefas];
    }
    this.valorTarefaEditado = null;
  }

  cancelar() {
    this.valorTarefaEditado = null;
  }
}
