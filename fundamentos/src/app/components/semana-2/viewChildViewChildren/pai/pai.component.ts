import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoViewComponent } from './filho/filho-view.component';

@Component({
  selector: 'pai',
  templateUrl: './pai.component.html',
})
export class PaiComponent {
  // TODO Usando a diretiva ViewChild => Captura um único elemento ou componente filho dentro do template.

  // @ViewChild(FilhoViewComponent) filho!: FilhoViewComponent;

  // ngAfterViewInit() {
  //   console.log('Mensagem do filho: ', this.filho.exibirMensagem());
  // }

  // mostrarMensagem() {
  //   alert(this.filho.mensagem);
  // }

  // TODO Usando a diretiva ViewChildren => Captura múltiplos elementos ou componentes filhos dentro do template.

  @ViewChildren(FilhoViewComponent) filhos!: QueryList<FilhoViewComponent>;

  ngAfterViewInit() {
    this.filhos.forEach((filho, index) => {
      console.log(`Filho ${index}:`, filho.exibirMensagem());
    });
  }

  mostraMensagem() {
    this.filhos.forEach((filho, index) => {
      alert(`Filho ${index}: ${filho.exibirMensagem()}`);
    });
  }
}
