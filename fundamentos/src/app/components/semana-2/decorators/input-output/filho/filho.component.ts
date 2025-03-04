import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent {
  @Input() valorTarefaFilho!: string;
  @Input() valorFiltro!: string;
  @Input() valorItemEditado: string | null = null;

  @Input() arrayItem: string[] = [];
  @Input() novoArrayItems: string[] = [];

  @Output() inserirNaLista = new EventEmitter<string>();
  @Output() filtrando = new EventEmitter<string>();
  @Output() deletarItem = new EventEmitter<string>();
  @Output() valorEditar = new EventEmitter<string>();
  @Output() valorSalvar = new EventEmitter<{ antigo: string; novo: string }>();
  @Output() valorCancelar = new EventEmitter<string>();

  novoValorItemEditado: string = '';

  inserirItemLista() {
    this.inserirNaLista.emit(this.valorTarefaFilho);
  }

  filtrar() {
    this.filtrando.emit(this.valorFiltro);
  }

  deletar(itemDeletado: string) {
    this.deletarItem.emit(itemDeletado);
  }

  editar(valorItem: string) {
    this.novoValorItemEditado = valorItem;
    this.valorEditar.emit(valorItem);
  }

  salvarEdicao(valorSalvo: string) {
    this.valorSalvar.emit({
      antigo: valorSalvo,
      novo: this.novoValorItemEditado,
    });
  }

  cancelar() {
    this.valorCancelar.emit();
  }
}
