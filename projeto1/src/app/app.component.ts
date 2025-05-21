import { Component } from '@angular/core';
import { PokemonsService } from './service/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto1';
  listaPokemons: any[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.getPokemonsComImagem().subscribe({
      next: (data) => {
        this.listaPokemons = data;
      },
    });
  }
}
