import { Component } from '@angular/core';
import { AlterarTemaService } from '../../../service/alternar-tema.service';

@Component({
  selector: 'alternar-status',
  templateUrl: './alternar-stauts.component.html',
})
export class AlternarStatusComponent {
  temaAtual: string = '';

  constructor(private temaService: AlterarTemaService) {}

  ngOnInit() {
    this.temaService.current$.subscribe((tema) => (this.temaAtual = tema));
  }
}
