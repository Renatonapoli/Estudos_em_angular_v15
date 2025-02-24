import { Item, items } from './../../../assets/core/item';
import { Component } from '@angular/core';

@Component({
  selector: 'lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.scss'],
})
export class ListaItemComponent {
  lista: Item[] = items;

  item: Item = { nome: '', conteudo: '' };

  setLista() {
    if (this.item.nome?.trim() && this.item.conteudo?.trim()) {
      this.lista.push({ ...this.item });
      this.item = { nome: '', conteudo: '' };
    } else {
      alert('Preencha todos os campos antes de inserir na lista!');
    }
  }

  deletar(tarefa?: string) {
    if (!tarefa) return;
    this.lista = this.lista.filter((item) => item.nome !== tarefa);
  }
}
