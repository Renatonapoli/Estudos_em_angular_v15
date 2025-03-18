import { LazyLoadingModule } from './components/semana-4/configuracao-router/lazyloading.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPaginaComponent } from './components/semana-4/configuracao-router/components/erroPagina/erro.component';

const routes: Routes = [
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import(
        './components/semana-4/configuracao-router/lazyloading.module'
      ).then((m) => m.LazyLoadingModule),
  },
  {
    path: '',
    redirectTo: '/lazy-loading',
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
export class AppRoutingModule {}
