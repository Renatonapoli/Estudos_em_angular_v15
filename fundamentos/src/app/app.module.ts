import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponente } from './components/primeiro-componente/pirmeiro-compoente.component';
import { HooksComponent } from './components/componente-hooks/hook.component';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './components/templates-componente/template.component';
import { BidirecionalComponent } from './components/bidirecional/bidirecional.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponente,
    HooksComponent,
    TemplateComponent,
    BidirecionalComponent,
    DiretivasComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
