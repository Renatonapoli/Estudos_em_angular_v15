import { Component } from '@angular/core';
import { FilmesService } from './service/fimes.service';
import { FormBuilder } from '@angular/forms';
import { Filme } from './models/filme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'busca-filmes';

  filmeNaoEncontrado: string = '';
  cardFilme: boolean = false;
  nomeFilme: string = '';
  arrayFilmes: Filme[] = [];

  constructor(private filmesService: FilmesService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  buscar(): void {
    this.filmesService.buscar(this.nomeFilme).subscribe({
      next: (filme: Filme) => {
        this.arrayFilmes = [];

        if (filme.Response === 'False') {
          this.filmeNaoEncontrado = 'Filme não Encontrado!';
        }
        if (filme.Response === 'True') {
          this.cardFilme = true;
          this.arrayFilmes.push(filme);
          this.nomeFilme = '';
        }
      },
      error: () => alert('Filme não encontrado ou resposta inválida:'),
    });
  }

  filtrar(): void {
    this.filmesService.filtrar(this.nomeFilme).subscribe({
      next: (nome) => {
        this.arrayFilmes = [];

        if (nome.Response === 'False') {
          this.filmeNaoEncontrado = 'Filme não Encontrado!';
        }
        if (nome.Response === 'True') {
          this.cardFilme = true;
          this.arrayFilmes = nome.Search;
        }
      },
    });
  }
}
