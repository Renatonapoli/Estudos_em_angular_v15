import { Component } from '@angular/core';

@Component({
  selector: 'diretivas-component',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss'],
})
export class DiretivasComponent {
  mostrarMensagem: boolean = false;

  titulo!: boolean;
  mensagem: string = 'Título passado por propriedade!';

  listaDeItems = ['Mamão', 'Melão', 'Jaca', 'Maça', 'Pêra', 'Uva', 'Limao'];
  novalista: string[] = [...this.listaDeItems];

  valor: string = '';

  mudarMensagem() {
    this.mostrarMensagem = !this.mostrarMensagem;
  }

  filtrar() {
    this.novalista = this.listaDeItems.filter((item) =>
      item.toLowerCase().includes(this.valor.toLowerCase())
    );
    console.log(this.listaDeItems);
  }
}
