import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() fabricante!: string;
  @Input() modelo!: string;
  @Input() quantidade!: number;
  @Input() botaoExistente: boolean = false;

  @Input() cor!: string;

  @Output() cliqueSaibaMais = new EventEmitter<string>();

  saibaMais() {
    this.cliqueSaibaMais.emit();
  }
}
