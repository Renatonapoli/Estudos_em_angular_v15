import { Component } from '@angular/core';

@Component({
  selector: 'filho-view',
  templateUrl: './filho-view.component.html',
})
export class FilhoViewComponent {
  mensagem = 'Mensagem do componente filho!';

  exibirMensagem() {
    return this.mensagem;
  }
}
