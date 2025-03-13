import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'observables-component',
  templateUrl: './observables.component.html',
})
export class ObservaveisComponent {
  ngOnInit() {
    const meuObservavel = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.complete();
    });

    meuObservavel.subscribe({
      next: (value) => console.log(`Valor emitido: ${value}`),
      error: (err) => console.log(`Error: ${err}`),
      complete: () => console.log('Observable finalizado!'),
    });
  }
}
