import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DadosItems } from './interfaces/dadosItem';

@Component({
  selector: 'ciclo-component',
  templateUrl: './ciclo.component.html',
})
export class CicloDeVidaComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() valor: DadosItems = { nome: 'Panela', cor: 'azul' };
  dado!: object;
  mostrar!: boolean;

  salvar() {
    this.valor = { ...this.valor, nome: 'Frigideira', cor: 'Verde' };
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges :', changes['valor'].currentValue);
  }

  ngDoCheck() {
    console.log('ngDoCheck: ', this.valor);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: ', this.valor);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: ', this.valor);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: ', this.valor);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: ', this.valor);
  }

  ngOnInit() {
    console.log('ngOnInit: ', this.valor);
  }
}
