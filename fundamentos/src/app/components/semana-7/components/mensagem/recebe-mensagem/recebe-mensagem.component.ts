import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MensagemService } from '../../../service/mensagem.service';

@Component({
  selector: 'recebe-mensagem',
  templateUrl: './recebe-mensagem.componet.html',
})
export class RecebeMensagemComponent implements OnInit, OnDestroy {
  recebeMensagem: string = '';
  private subscription!: Subscription;

  constructor(private mensagemService: MensagemService) {}

  ngOnInit(): void {
    this.mensagemService.message$.subscribe(
      (msn) => (this.recebeMensagem += `${msn} \n`)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
