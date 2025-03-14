import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Users } from '../assets/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getActiveUsers(): Observable<{ name: string; email: string }[]> {
    return this.http.get<Users[]>(this.apiURL).pipe(
      tap((users) => console.log('Usuários recebidos: ', users)),
      // map((users) => users.filter((user) => user.active)),
      map((users) =>
        users.map((user) => ({ name: user.name, email: user.email }))
      ),
      tap((users) => console.log('Usuários processados: ', users))
    );
  }
}
