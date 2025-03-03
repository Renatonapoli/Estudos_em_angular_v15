import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent {
  @Input() valorTarefaFilho!: string;
  @Input() arrayItem: string[] = [];

  @Output() inserirNaLista = new EventEmitter<string>();

  inserirItemLista() {
    this.inserirNaLista.emit(this.valorTarefaFilho);
  }
}
