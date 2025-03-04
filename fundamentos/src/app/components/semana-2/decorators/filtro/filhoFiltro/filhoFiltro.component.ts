import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filho-filtro',
  templateUrl: './filhoFiltro.component.html',
})
export class FilhoFiltroCompoent {
  @Input() arrayItems: string[] = [];
  @Input() arrayAtualizado: string[] = [...this.arrayItems];

  @Input() valorInput!: string;
  @Input() valorAtual: string | null = null;

  @Output() inputFiltro = new EventEmitter<string>();
  @Output() editandoValor = new EventEmitter<string>();
  @Output() salvandoValorEditado = new EventEmitter<{
    antigo: string;
    novo: string;
  }>();
  @Output() cancelarEdicao = new EventEmitter<string>();

  valorEditado: string = '';

  filtrando() {
    this.inputFiltro.emit(this.valorInput);
  }

  editando(item: string) {
    this.valorEditado = item;
    this.editandoValor.emit(item);
  }

  salvarValor(itemSalvo: string) {
    this.salvandoValorEditado.emit({
      antigo: itemSalvo,
      novo: this.valorEditado,
    });
  }

  cancelar() {
    this.cancelarEdicao.emit();
  }
}
