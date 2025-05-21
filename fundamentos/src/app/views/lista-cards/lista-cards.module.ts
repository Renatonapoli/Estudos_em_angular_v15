import { NgModule } from '@angular/core';
import { ListaCardsComponent } from './lista-cards.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/components/modals/modalSolicitacao/modal.component';
import { ModalSucessoComponent } from 'src/app/components/modals/modalSucesso/modalSucesso.component';

@NgModule({
  declarations: [
    ListaCardsComponent,
    CardComponent,
    ModalComponent,
    ModalSucessoComponent,
  ],

  imports: [CommonModule, FormsModule],
  exports: [ListaCardsComponent],
})
export class ListaCardsModule {}
