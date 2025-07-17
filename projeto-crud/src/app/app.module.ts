import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { FormularioProdutosComponent } from './components/formulario-produtos/formulario-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    FormularioProdutosComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
