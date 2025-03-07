import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DadosItems } from '../interfaces/dadosItem';

@Component({
  selector: 'dados-component',
  templateUrl: './dados.component.html',
})
export class DadosComponent implements OnDestroy {
  @Input() dadoInput: DadosItems = { nome: '', cor: '' };
  @Output() salvandoDado = new EventEmitter<{ nome: ''; cor: '' }>();

  salvar() {
    this.salvandoDado.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges :', changes['dadoInput'].currentValue);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: ', this.dadoInput);
  }
}
