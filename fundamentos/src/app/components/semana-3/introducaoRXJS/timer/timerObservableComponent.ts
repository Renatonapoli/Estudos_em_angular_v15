import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'timer-component',
  template: `<h1>Component timer</h1>
    <p>Timer: {{ valor }}</p> `,
})
export class TimerComponent implements OnInit {
  valor!: number;

  ngOnInit() {
    const meuObservable = new Observable<number>((observer) => {
      let count = 1;
      const interval = setInterval(() => {
        observer.next(count++);
        if (count > 5) {
          observer.complete();
          clearInterval(interval);
        }
      }, 1000);
    });

    meuObservable.subscribe({
      next: (value) => (this.valor = value),
      complete: () => console.log('Observable finalizado!'),
    });
  }
}
