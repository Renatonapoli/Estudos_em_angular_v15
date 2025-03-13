import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'arrayObservable-component',
  template: `
    <h1>componente Array</h1>
    <p>Valores emitidos: {{ array }}</p>
  `,
})
export class ArrayObservableComponent implements OnInit {
  array: string[] = [];

  ngOnInit() {
    const meuArray = ['Angular', 'React', 'Vue'];
    const arrayObservable = from(meuArray);

    arrayObservable.subscribe({
      next: (value) => this.array.push(value),
      complete: () => console.log('Todos os valores foram emitidos!'),
    });
  }
}
