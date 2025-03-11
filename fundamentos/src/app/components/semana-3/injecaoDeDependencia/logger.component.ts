import { Component } from '@angular/core';
import { LoggerService } from './service/logger.service';

@Component({
  selector: 'logger-component',
  templateUrl: './logger.component.html',
})
export class LoggerComponent {
  listaPokemon: string[] = [];

  constructor(private loggerService: LoggerService) {
    this.loggerService.log('loggerComponent inicializado!');
  }

  pokemons() {
    return this.loggerService.getPokemons().subscribe({
      next: (pokemon) => (this.listaPokemon = pokemon),
    });
  }
}
