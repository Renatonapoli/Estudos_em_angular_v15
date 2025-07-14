import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent {
  title = 'card-produto';

  @Input() titulo: string = '';
  @Input() conteudo: string = '';
  @Output() abrirModal = new EventEmitter<void>();

  saibaMais() {
    this.abrirModal.emit();
  }
}
