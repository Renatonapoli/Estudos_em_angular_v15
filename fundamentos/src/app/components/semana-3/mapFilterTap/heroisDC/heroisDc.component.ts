import { Component, OnInit } from '@angular/core';
import { HeroisDcService } from '../service/heroisDC.service';

@Component({
  selector: 'heroisDC-component',
  templateUrl: './heroisDc.component.html',
  styleUrls: ['./heroisDC.component.scss'],
})
export class HeroisDcComponent implements OnInit {
  herois: any[] = [];

  constructor(private heroisDcService: HeroisDcService) {}

  ngOnInit() {
    this.heroisDcService.getHerois().subscribe(
      (data) => {
        this.herois = data;
        console.log('Lista de Heróis carregada: ', this.herois);
      },
      (error) => {
        console.log('Error ao buscar heróis: ', error);
      }
    );
  }
}
