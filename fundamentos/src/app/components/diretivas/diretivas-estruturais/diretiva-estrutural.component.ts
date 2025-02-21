import { Component } from '@angular/core';
import { Hero, heroes } from 'src/assets/core/hero';

@Component({
  selector: 'diretiva-estrutural',
  templateUrl: './diretiva-estrutural.component.html',
  styleUrls: ['./diretiva-estruturall.component.scss'],
})
export class DiretivaEstruturalComponent {
  heroes = heroes;
  hero: Hero | null = this.heroes[0];

  trackById(index: number, hero: Hero): number {
    return hero.id;
  }
}
