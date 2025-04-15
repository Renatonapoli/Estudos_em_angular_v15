import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlterarTemaService {
  private temaSubject = new BehaviorSubject<string>('claro');
  current$ = this.temaSubject.asObservable();

  setTema(tema: string) {
    this.temaSubject.next(tema);
  }

  get currentTema(): string {
    return this.temaSubject.value;
  }
}
