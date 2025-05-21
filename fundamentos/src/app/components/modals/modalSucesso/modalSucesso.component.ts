import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-sucesso',
  templateUrl: './modalSucesso.component.html',
  styleUrls: ['./modalSucesso.component.scss'],
})
export class ModalSucessoComponent {
  @Output() modalfechado = new EventEmitter();

  fecharModal() {
    this.modalfechado.emit();
  }
}
