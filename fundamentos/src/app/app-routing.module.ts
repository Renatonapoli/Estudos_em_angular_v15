import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPaginaComponent } from './components/semana-4/configuracao-router/components/erroPagina/erro.component';
import { LoginComponent } from './components/semana-4/configuracao-router/components/login/login.component';
import { DashboardComponent } from './components/semana-4/configuracao-router/components/dashboard/dashboard.component';
import { authGuard } from './components/semana-4/guards/auth.guards';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'lazy-loading',
        loadChildren: () =>
          import(
            './components/semana-4/configuracao-router/lazyloading.module'
          ).then((m) => m.LazyLoadingModule),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
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
