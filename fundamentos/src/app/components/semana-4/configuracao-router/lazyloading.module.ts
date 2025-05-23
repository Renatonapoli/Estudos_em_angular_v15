import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarroComponent } from './components/carros/carros.component';
import { CarrosDeLuxoComponent } from './components/carros/tiposDeCarros/luxo/luxo.component';
import { CarrosDeEntradaComponent } from './components/carros/tiposDeCarros/simples/simples.component';
import { LazyLoadingComponent } from './components/lazyLoading/lazyLoading.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'lazy-loading',
        component: LazyLoadingComponent,
        children: [
          {
            path: 'home/:id',
            component: HomeComponent,
          },
          {
            path: 'carros',
            component: CarroComponent,
            children: [
              {
                path: 'luxo/:id',
                component: CarrosDeLuxoComponent,
              },
              {
                path: 'entrada/:id',
                component: CarrosDeEntradaComponent,
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadingModule {}
