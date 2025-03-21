import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';

export const UserResolve: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('carregando os dados do usuário...');
  return of({ id: 1, nome: 'Renato Napoli', email: 'renato@email.com' });
};
