import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'modal-sucesso',
  templateUrl: './modal-sucesso.component.html',
  styleUrls: ['./modal.sucesso.component.scss'],
})
export class ModalSucessoComponent {
  title = 'modal-sucesso';

  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }
}
