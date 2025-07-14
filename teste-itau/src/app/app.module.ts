import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardProdutoComponent } from './components/cards/card-produto/card-produto.component';
import { ModalContatoComponent } from './components/modals/modal-contato/modal-contato.component';
import { ModalSucessoComponent } from './components/modals/modal-sucesso/modal-sucesso.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardProdutoComponent,
    ModalContatoComponent,
    ModalSucessoComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
