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
import { FomularioComponent } from './components/semana-4/canDeactivate/formulario/fomulario.component';
import { CanDeActivateGuard } from './components/semana-4/canDeactivate/guards/canDeActivateGuard.guards';

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
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   component: ErroPaginaComponent,
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivateChild: [adminGuards],
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'admin',
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: 'dashboard',
  //       component: DashboardAdminComponent,
  //     },
  //     {
  //       path: 'usuario',
  //       component: UsuarioComponent,
  //     },
  //   ],
  // },
  // {
  //   path: '**',
  //   redirectTo: 'admin',
  // },
  {
    path: 'formulario',
    component: FomularioComponent,
    canDeactivate: [CanDeActivateGuard],
  },
  {
    path: '',
    redirectTo: '/formulario',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
