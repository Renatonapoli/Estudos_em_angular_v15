import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarroComponent } from './components/carros/carros.component';
import { ErroPaginaComponent } from './components/erroPagina/erro.component';
import { CarrosDeLuxoComponent } from './components/carros/tiposDeCarros/luxo/luxo.component';
import { CarrosDeEntradaComponent } from './components/carros/tiposDeCarros/simples/simples.component';

const routes: Routes = [
  {
    path: 'home/:id',
    component: HomeComponent,
  },
  {
    path: 'carros',
    component: CarroComponent,
    children: [
      {
        path: 'carros-luxo/:id',
        component: CarrosDeLuxoComponent,
      },
      {
        path: 'carros-entrada/:id',
        component: CarrosDeEntradaComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/1',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErroPaginaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
