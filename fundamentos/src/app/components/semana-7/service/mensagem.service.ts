import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  private messageSubject = new Subject<string>();

  message$ = this.messageSubject.asObservable();

  enviaMensagem(mensagem: string) {
    this.messageSubject.next(mensagem);
  }
}
