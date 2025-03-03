import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DiretivasAtributoComponent } from './components/diretivas/diretivas-de-atributo/diretivas.component';
import { DiretivaEstruturalComponent } from './components/diretivas/diretivas-estruturais/diretiva-estrutural.component';
import { InputOutputComponent } from './components/semana-2/diretivas/input-output/input-output.component';
import { HooksComponent } from './components/semana-1/componente-hooks/hook.component';
import { FilhoComponent } from './components/semana-2/diretivas/input-output/filho/filho.component';
import { PrimeiroComponente } from './components/primeiro-componente/pirmeiro-compoente.component';
import { BidirecionalComponent } from './components/semana-1/bidirecional/bidirecional.component';
import { TemplateComponent } from './components/templates-componente/template.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponente,
    HooksComponent,
    TemplateComponent,
    BidirecionalComponent,
    DiretivasAtributoComponent,
    DiretivaEstruturalComponent,
    InputOutputComponent,
    FilhoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
