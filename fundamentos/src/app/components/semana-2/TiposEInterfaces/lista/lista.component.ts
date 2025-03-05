import { Component } from '@angular/core';
import { ListaDePecas } from '../interfaces/pecaCarro';
import { PecasCarro } from '../interfaces/pecasCarroTypes';

@Component({
  selector: 'lista-component',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  lista: ListaDePecas[] = [
    { fabricante: 'Honda', modelo: 'Amortecedor', quantidade: 2, cor: 'Azul' },
    { fabricante: 'Toyota', modelo: 'Paralama', quantidade: 1, cor: 'cinza' },
  ];

  listaTypes: PecasCarro[] = [
    { fabricante: 'Honda', modelo: 'Amortecedor', quantidade: 2, cor: 'Azul' },
    { fabricante: 'Toyota', modelo: 'Paralama', quantidade: 1, cor: 'cinza' },
  ];
}
