import { ForbiddenNameDirective } from './components/semana-5/curstomValidators/formCustom/forbidden-name.directive';
import { FormCustomValidatorsComponent } from './components/semana-5/curstomValidators/formCustom/formCustom.component';
import { UserComponent } from './components/semana-4/resolve/user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PipesComponent } from './components/semana-2/pipes/pipes.component';
import { UserListComponent } from './components/semana-3/criandoServicos/user-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerComponent } from './components/semana-3/injecaoDeDependencia/logger.component';
import { InputEntradaComponent } from './components/semana-3/compartilhamentoDeDados/inputEntrada/inputEntrada.component';
import { DisplayComponent } from './components/semana-3/compartilhamentoDeDados/inputEntrada/displayComponent/displayComponent.component';
import { ObservaveisComponent } from './components/semana-3/introducaoRXJS/observables.component';
import { TimerComponent } from './components/semana-3/introducaoRXJS/timer/timerObservableComponent';
import { ArrayObservableComponent } from './components/semana-3/introducaoRXJS/arrayObservable/arrayObservable.component';
import { UsersComponent } from './components/semana-3/mapFilterTap/users/users.componente';
import { PokemonComponent } from './components/semana-3/mapFilterTap/pokemons/pokemon.component';
import { HeroisDcComponent } from './components/semana-3/mapFilterTap/heroisDC/heroisDc.component';
import { HomeComponent } from './components/semana-4/configuracao-router/components/home/home.component';
import { CarroComponent } from './components/semana-4/configuracao-router/components/carros/carros.component';
import { AppRoutingModule } from './app-routing.module';
import { ErroPaginaComponent } from './components/semana-4/configuracao-router/components/erroPagina/erro.component';
import { CarrosDeEntradaComponent } from './components/semana-4/configuracao-router/components/carros/tiposDeCarros/simples/simples.component';
import { CarrosDeLuxoComponent } from './components/semana-4/configuracao-router/components/carros/tiposDeCarros/luxo/luxo.component';
import { RouterLink } from '@angular/router';
import { LazyLoadingComponent } from './components/semana-4/configuracao-router/components/lazyLoading/lazyLoading.component';
import { LoginComponent } from './components/semana-4/configuracao-router/components/login/login.component';
import { DashboardComponent } from './components/semana-4/configuracao-router/components/dashboard/dashboard.component';
import { DashboardAdminComponent } from './components/semana-4/configuracao-router/components/admin/dashboard/dashboard.component';
import { UsuarioComponent } from './components/semana-4/configuracao-router/components/admin/usuario/usuario.component';
import { AdminComponent } from './components/semana-4/configuracao-router/components/admin/admin.component';
import { FomularioComponent } from './components/semana-4/canDeactivate/formulario/fomulario.component';
import { FormularioComponent } from './components/semana-5/templaDrivenFormsVSReactiveForms/formulario/fomulario.component';
import { FormsValidComponent } from './components/semana-5/validacoes/formValid/formValid.component';
import { FormularioUserComponent } from './components/semana-5/controleDeEstadosDosCampos/formulario/formularioUser.component';
import { ListaUsuarioComponent } from './components/semana-6/httpcliente-requisicoesHTTP/listaUsuarios/lista-usuarios.component';
import { ListaPokemonsComponent } from './components/semana-6/httpcliente-requisicoesHTTP/listaPokemons/listaPokemons.component';
import { ApiHeroesComponent } from './components/semana-6/metodos-GET-POST-PUT-DELETE/apiHeroes/apiHeroes.component';
import { EnviaMensagemComponent } from './components/semana-7/components/mensagem/envia-mensagem/envia-mensagem.component';
import { RecebeMensagemComponent } from './components/semana-7/components/mensagem/recebe-mensagem/recebe-mensagem.component';
import { AlternarStatusComponent } from './components/semana-7/components/behaviorSubject/alternar-status/alternar-status.component';
import { AlternarTemaComponent } from './components/semana-7/components/behaviorSubject/alternar-tema/alternar-tema.component';
import { ListaCardsModule } from './views/lista-cards/lista-cards.module';

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
    PipesComponent,
    UserListComponent,
    LoggerComponent,
    InputEntradaComponent,
    DisplayComponent,
    ObservaveisComponent,
    TimerComponent,
    ArrayObservableComponent,
    UsersComponent,
    PokemonComponent,
    HeroisDcComponent,
    HomeComponent,
    CarroComponent,
    ErroPaginaComponent,
    CarrosDeEntradaComponent,
    CarrosDeLuxoComponent,
    LazyLoadingComponent,
    LoginComponent,
    DashboardComponent,
    DashboardAdminComponent,
    UsuarioComponent,
    AdminComponent,
    FomularioComponent,
    UserComponent,
    FormularioComponent,
    FormsValidComponent,
    FormCustomValidatorsComponent,
    ForbiddenNameDirective,
    FormularioUserComponent,
    ListaUsuarioComponent,
    ListaPokemonsComponent,
    ApiHeroesComponent,
    EnviaMensagemComponent,
    RecebeMensagemComponent,
    AlternarStatusComponent,
    AlternarTemaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    ListaCardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
