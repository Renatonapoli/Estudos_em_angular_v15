import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DigimonService {
  private url = 'https://digi-api.com/api/v1/digimon';

  constructor(private http: HttpClient) {}

  getAllDigimons(): Observable<any[]> {
    return this.http.get<any>(this.url).pipe(
      map((res: any) =>
        res.content.map((digimon: any) => ({
          id: digimon.id,
          nome: digimon.name,
          imagem: digimon.image,
        }))
      )
    );
  }

  getDigimonId(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
