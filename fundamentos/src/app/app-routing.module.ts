import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPaginaComponent } from './components/semana-4/configuracao-router/components/erroPagina/erro.component';
import { LoginComponent } from './components/semana-4/configuracao-router/components/login/login.component';
import { DashboardComponent } from './components/semana-4/configuracao-router/components/dashboard/dashboard.component';
import { authGuard } from './components/semana-4/guards/auth.guards';
import { UsuarioComponent } from './components/semana-4/configuracao-router/components/admin/usuario/usuario.component';
import { adminGuards } from './components/semana-4/configuracao-router/components/admin/guard/admin.guards';
import { AdminComponent } from './components/semana-4/configuracao-router/components/admin/admin.component';
import { DashboardAdminComponent } from './components/semana-4/configuracao-router/components/admin/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   canActivate: [authGuard],
  //   loadChildren: () =>
  //     import(
  //       './components/semana-4/configuracao-router/lazyloading.module'
  //     ).then((m) => m.LazyLoadingModule),
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardAdminComponent,
        canActivateChild: [adminGuards],
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
        canActivateChild: [adminGuards],
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   component: ErroPaginaComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
