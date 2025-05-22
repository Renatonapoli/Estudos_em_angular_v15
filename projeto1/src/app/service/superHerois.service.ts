import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroisService {
  private ids: string[] = ['1', '2', '70', '64', '50', '48'];

  constructor(private http: HttpClient) {}

  getSuperHerois(): Observable<any[]> {
    const resquests = this.ids.map((id) => {
      return this.http.get<any>(`/api/${id}`);
    });
    return forkJoin(resquests);
  }
}
