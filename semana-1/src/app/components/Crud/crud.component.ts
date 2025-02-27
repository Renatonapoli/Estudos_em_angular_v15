import { Component } from '@angular/core';

@Component({
  selector: 'crud-component',
  templateUrl: './crud.component.html',
})
export class CrudComponent {
  valorItemInserido!: string;
  itemFiltrado!: string;

  valorEditado: string | null = null;
  novoValorEditado!: string;

  listaDeItems: string[] = ['Tênis', 'jujuba', 'Melão'];
  novaLista: string[] = [...this.listaDeItems];

  postItemLista() {
    this.listaDeItems.push(this.valorItemInserido);
    this.novaLista = [...this.listaDeItems];
    this.valorItemInserido = '';
  }

  filtrarLista() {
    this.novaLista = this.listaDeItems.filter((item) =>
      item.toLowerCase().includes(this.itemFiltrado.toLowerCase())
    );
  }

  deleteItemLista(valorDeletado: string) {
    this.listaDeItems = this.listaDeItems.filter(
      (item) => item !== valorDeletado
    );
    this.novaLista = [...this.listaDeItems];
  }

  editarValorItem(itemValor: string) {
    this.valorEditado = itemValor;
    this.novoValorEditado = itemValor;
  }

  salvarEdicao(valorSalvo: string) {
    const index = this.listaDeItems.indexOf(valorSalvo);
    if (index !== -1) {
      this.listaDeItems[index] = this.novoValorEditado;
      this.novaLista = [...this.listaDeItems];
    }
    this.valorEditado = null;
  }

  cancelar() {
    this.valorEditado = null;
  }
}
