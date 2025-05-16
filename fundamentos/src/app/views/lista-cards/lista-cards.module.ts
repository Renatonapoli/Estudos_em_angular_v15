import { NgModule } from '@angular/core';
import { ListaCardsComponent } from './lista-cards.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaCardsComponent, CardComponent, ModalComponent],

  imports: [CommonModule, FormsModule],
  exports: [ListaCardsComponent],
})
export class ListaCardsModule {}
