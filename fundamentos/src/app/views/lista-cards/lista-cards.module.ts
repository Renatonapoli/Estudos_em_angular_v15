import { NgModule } from '@angular/core';
import { ListaCardsComponent } from './lista-cards.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListaCardsComponent, CardComponent, ModalComponent],

  imports: [CommonModule],
  exports: [ListaCardsComponent],
})
export class ListaCardsModule {}
