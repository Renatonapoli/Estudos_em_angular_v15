import { Component } from '@angular/core';
import { DigimonService } from './service/digimon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'api-digimon';

  digimons: any[] = [];

  constructor(private serviceDigimon: DigimonService) {}

  ngOnInit(): void {
    this.serviceDigimon.getAllDigimons().subscribe({
      next: (digimon) => (this.digimons = digimon),
    });
  }

  infoDigimon(id: number) {
    this.serviceDigimon.getDigimonId(id).subscribe({
      next: (digimon) => console.log(digimon),
    });
  }
}
