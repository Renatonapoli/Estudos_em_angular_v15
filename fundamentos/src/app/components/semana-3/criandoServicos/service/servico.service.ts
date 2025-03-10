import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private userSubject = new BehaviorSubject<User[]>([]);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchUsers(): void {
    this.http.get<User[]>(this.apiUrl).subscribe((users) => {
      this.userSubject.next(users);
    });
  }

  addUser(user: User): void {
    this.http.post<User>(this.apiUrl, user).subscribe((newUser) => {
      this.userSubject.next([...this.userSubject.value, newUser]);
    });
  }

  deleteUser(userId: number): void {
    this.http.delete<User>(`${this.apiUrl}/${userId}`).subscribe(() => {
      const updateUsers = this.userSubject.value.filter((u) => u.id !== userId);
      this.userSubject.next(updateUsers);
    });
  }
}
