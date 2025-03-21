import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AdminService } from '../service/admin.service';

export const adminGuards: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const adminService = inject(AdminService);
  const router = inject(Router);

  if (!adminService.isAdmin()) {
    alert('Acesso negado! Apenas administrados podem acessar esta seção.');
    return false;
  }
  return true;
};
