import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-filtro',
  templateUrl: './crud-filtro.component.html',
  styleUrls: ['./crud-filtro.component.scss'],
})
export class CrudFiltroComponent {
  valorItem!: string;
  itemDaLista!: string;

  editarValorItem: string | null = null;
  novoValorEditado!: string;

  arrayItems: string[] = ['Garrafa', 'Livro'];
  novaLista: string[] = [...this.arrayItems];

  inserirNaLista() {
    this.arrayItems.push(this.valorItem);
    this.novaLista = [...this.arrayItems];
    this.valorItem = '';
  }

  filtrarLista() {
    this.novaLista = this.arrayItems.filter((item) =>
      item.toLowerCase().includes(this.itemDaLista.toLowerCase())
    );
  }

  deletarItem(itemDeletado: string) {
    this.novaLista = this.arrayItems = this.arrayItems.filter(
      (item) => item !== itemDeletado
    );
  }

  editarValor(editandoItem: string) {
    this.editarValorItem = editandoItem;
    this.novoValorEditado = editandoItem;
  }

  salvarEdicao(itemEditado: string) {
    const index = this.arrayItems.indexOf(itemEditado);
    if (index !== -1) {
      this.arrayItems[index] = this.novoValorEditado;
      this.novaLista = [...this.arrayItems];
    }
    this.editarValorItem = null;
  }

  cancelar() {
    this.editarValorItem = null;
  }
}
