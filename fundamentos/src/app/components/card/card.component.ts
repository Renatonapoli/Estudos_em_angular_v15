import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  @Output() saibaMais = new EventEmitter<void>();

  clickSaibaMais() {
    this.saibaMais.emit();
  }
}
