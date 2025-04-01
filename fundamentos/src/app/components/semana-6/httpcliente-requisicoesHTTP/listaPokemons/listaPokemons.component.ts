import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ListaPokemonService } from './service/pokemons.service';

@Component({
  selector: 'lista-pokemons',
  templateUrl: './listaPokemons.component.html',
})
export class ListaPokemonsComponent implements OnInit {
  listaPokemons: any[] = [];
  nomePokemon: string[] = [];

  constructor(private listaPokemonsService: ListaPokemonService) {}

  ngOnInit() {
    this.pokemons();
  }

  pokemons() {
    this.listaPokemonsService.getPokemons().subscribe((data) => {
      this.listaPokemons = data.results;
    });
  }
}
