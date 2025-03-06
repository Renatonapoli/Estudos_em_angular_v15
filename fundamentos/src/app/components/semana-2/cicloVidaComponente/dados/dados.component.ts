import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dados-component',
  templateUrl: './dados.component.html',
})
export class DadosComponent {
  @Input() dadoInput = 'Testando hooks no angular';
  @Output() salvandoDado = new EventEmitter<string>();

  salvar() {
    this.salvandoDado.emit(this.dadoInput);
  }
}
