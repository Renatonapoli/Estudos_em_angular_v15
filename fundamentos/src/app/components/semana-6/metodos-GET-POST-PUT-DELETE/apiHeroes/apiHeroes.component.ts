import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'api-heroes',
  templateUrl: './apiHeroes.component.html',
})
export class ApiHeroesComponent implements OnInit {
  heroes: Hero[] = [] as Hero[];
  apiUrl = '/api';

  newHeroName: string = '';
  newHeroPower: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.http.get<Hero[]>(`${this.apiUrl}/1`).subscribe((data) => {
      console.log(data);
      this.heroes = data || [];
    });
  }

  addHero(name: string, power: string): void {
    if (!name || !power) return;
    const newHero: Hero = { name, power };
    this.http
      .post<Hero>(this.apiUrl, newHero)
      .subscribe((hero) => this.heroes.push(hero));
    this.newHeroName = '';
    this.newHeroPower = '';
  }

  update(hero: Hero): void {
    this.http
      .put(`${this.apiUrl}/${hero.id}`, hero)
      .subscribe(() => this.getHeroes());
  }

  deleteHero(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.heroes = this.heroes.filter((hero) => hero.id !== id);
    });
  }
}
