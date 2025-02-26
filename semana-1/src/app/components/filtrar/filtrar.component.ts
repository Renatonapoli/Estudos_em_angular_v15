import { Component } from '@angular/core';

@Component({
  selector: 'filtro-component',
  templateUrl: './filtrar.component.html',
})
export class FiltroComponent {
  valor!: string;
  valorPensamento: string = '';
  pensamentoEditado: string | null = null;
  novoValorPensamento: string = '';

  listaPensamentos: string[] = ['teste', 'Forma'];
  listaFiltro: string[] = [...this.listaPensamentos];

  salvarNaLista() {
    this.listaPensamentos.push(this.valor);
    this.listaFiltro = [...this.listaPensamentos];
    this.valor = '';
  }

  deletePensamento(valorItem: string) {
    this.listaFiltro = this.listaPensamentos = this.listaPensamentos.filter(
      (item) => item !== valorItem
    );
  }

  filtrarPensamento() {
    this.listaFiltro = this.listaPensamentos.filter((item) =>
      item.toLowerCase().includes(this.valorPensamento.toLowerCase())
    );
  }

  editarPensamento(pensamento: string) {
    this.pensamentoEditado = pensamento;
    this.novoValorPensamento = pensamento;
  }

  salvarPensamentoEditado(pensamentoAntigo: string) {
    const index = this.listaPensamentos.indexOf(pensamentoAntigo);
    if (index !== -1) {
      this.listaPensamentos[index] = this.novoValorPensamento;
      this.listaFiltro = [...this.listaPensamentos];
    }
    this.pensamentoEditado = null;
  }

  cancelar() {
    this.pensamentoEditado = null;
  }
}
