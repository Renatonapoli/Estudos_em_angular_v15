import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HooksComponent } from './components/semana-1/componente-hooks/hook.component';
import { BidirecionalComponent } from './components/semana-1/bidirecional/bidirecional.component';
import { PrimeiroComponente } from './components/semana-1/primeiro-componente/pirmeiro-compoente.component';
import { TemplateComponent } from './components/semana-1/templates-componente/template.component';
import { DiretivasAtributoComponent } from './components/semana-1/diretivas/diretivas-de-atributo/diretivas.component';
import { DiretivaEstruturalComponent } from './components/semana-1/diretivas/diretivas-estruturais/diretiva-estrutural.component';
import { InputOutputComponent } from './components/semana-2/decorators/input-output/input-output.component';
import { FilhoComponent } from './components/semana-2/decorators/input-output/filho/filho.component';
import { FiltroComponent } from './components/semana-2/decorators/filtro/filtro.component';
import { FilhoFiltroCompoent } from './components/semana-2/decorators/filtro/filhoFiltro/filhoFiltro.component';
import { ListaComponent } from './components/semana-2/TiposEInterfaces/lista/lista.component';
import { CardComponent } from './components/semana-2/TiposEInterfaces/components/card/card.component';
import { CicloDeVidaComponent } from './components/semana-2/cicloVidaComponente/ciclo.component';
import { DadosComponent } from './components/semana-2/cicloVidaComponente/dados/dados.component';
import { PaiComponent } from './components/semana-2/viewChildViewChildren/pai/pai.component';
import { FilhoViewComponent } from './components/semana-2/viewChildViewChildren/pai/filho/filho-view.component';

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
    FiltroComponent,
    FilhoFiltroCompoent,
    ListaComponent,
    CardComponent,
    CicloDeVidaComponent,
    DadosComponent,
    PaiComponent,
    FilhoViewComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
