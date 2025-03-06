import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

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
    AfterViewChecked,
    OnDestroy
{
  @Input() valor: string = 'Testando ciclo de vida';
  dado!: string;
  mostrar!: boolean;

  salvar() {
    this.dado = this.valor;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['valor']) {
      console.log('ngOnChanges: ', changes['valor'].currentValue);
    }
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
    console.log('ngAfterViewInit: ', this.valor);
  }

  ngOnInit() {
    console.log('ngOnInit: ', this.valor);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: ', this.dado);
  }
}
