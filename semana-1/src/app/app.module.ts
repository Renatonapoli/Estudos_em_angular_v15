import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaItemComponent } from './components/lista-items/lista-item.component';
import { FormsModule } from '@angular/forms';
import { BotaoComponent } from './components/botao/botao.component';
import { DiretivasComponent } from './components/ngFor_ngIf/diretivas.component';
import { FiltroComponent } from './components/filtrar/filtrar.component';
import { CrudComponent } from './components/Crud/crud.component';
import { CrudFiltroComponent } from './components/crud-filtro/crud-filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaItemComponent,
    BotaoComponent,
    DiretivasComponent,
    FiltroComponent,
    CrudComponent,
    CrudFiltroComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
