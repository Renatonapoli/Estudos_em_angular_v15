import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent {
  @Input() valorTarefaFilho!: string;
  @Input() valorFiltro!: string;

  @Input() arrayItem: string[] = [];
  @Input() novoArrayItems: string[] = [];

  @Output() inserirNaLista = new EventEmitter<string>();
  @Output() filtrando = new EventEmitter<string>();
  @Output() deletarItem = new EventEmitter<string>();

  inserirItemLista() {
    this.inserirNaLista.emit(this.valorTarefaFilho);
  }

  filtrar() {
    this.filtrando.emit(this.valorFiltro);
  }

  deletar(itemDeletado: string) {
    this.deletarItem.emit(itemDeletado);
  }
}
