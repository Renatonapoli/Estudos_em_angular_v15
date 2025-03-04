import { Component } from '@angular/core';

@Component({
  selector: 'filtro-component',
  templateUrl: './filtro.component.html',
})
export class FiltroComponent {
  valorPesquisado!: string;
  valorAtualPai: string | null = null;
  valorEditadoPai!: string;

  listaArray: string[] = [
    'Correr 30 minutos na esteira',
    'Ir para a academia de seg. à sex.',
  ];

  novaLista: string[] = [...this.listaArray];

  filtrar(items: string) {
    this.novaLista = this.listaArray.filter((item) =>
      item.toLowerCase().includes(items.toLowerCase())
    );
  }

  editandoPai(valorEditado: string) {
    this.valorAtualPai = valorEditado;
    this.valorEditadoPai = valorEditado;
  }

  salvar(item: { antigo: string; novo: string }) {
    const index = this.listaArray.indexOf(item.antigo);
    if (index !== -1) {
      this.listaArray[index] = item.novo;
      this.novaLista = [...this.listaArray];
    }
    this.valorAtualPai = null;
  }

  cancelar() {
    this.valorAtualPai = null;
  }
}
