import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bidirecional',
  templateUrl: './bidirecional.component.html',
})
export class BidirecionalComponent {
  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  decrescente() {
    this.sizePx(-1);
  }

  crescente() {
    this.sizePx(+1);
  }

  sizePx(valor: number) {
    this.size = Math.min(40, Math.max(0, +this.size + valor));
    this.sizeChange.emit(this.size);
  }
}
