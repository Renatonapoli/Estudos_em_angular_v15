import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-digimon',
  templateUrl: './card-digimon.component.html',
  styleUrls: ['./card-digimon.component.scss'],
})
export class CardDigimonComponent {
  @Input() nome: string = '';
  @Input() imagem: string = '';

  @Output() info = new EventEmitter<void>();

  infoDigimon(): void {
    this.info.emit();
  }
}
