import { Component } from '@angular/core';

@Component({
  selector: 'filtro-component',
  templateUrl: './filtrar.component.html',
})
export class FiltroComponent {
  valor!: string;
  valorPensamento: string = '';

  listaPensamentos: string[] = ['teste', 'Forma'];
  listaFiltro: string[] = [...this.listaPensamentos];

  salvarNaLista() {
    this.listaPensamentos.push(this.valor);
    this.listaFiltro = [...this.listaPensamentos];
    this.valor = '';
  }

  deletePensamento(valorItem: string) {
    this.listaPensamentos = this.listaPensamentos.filter(
      (item) => item !== valorItem
    );
    this.listaFiltro = [...this.listaPensamentos];
  }

  filtrarPensamento() {
    this.listaFiltro = this.listaPensamentos.filter((item) =>
      item.toLowerCase().includes(this.valorPensamento.toLowerCase())
    );
  }
}
