import { NgModule } from '@angular/core';
import { ListaCardsComponent } from './lista-cards.component';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [ListaCardsComponent, CardComponent],

  imports: [],
  exports: [ListaCardsComponent],
})
export class ListaCardsModule {}
