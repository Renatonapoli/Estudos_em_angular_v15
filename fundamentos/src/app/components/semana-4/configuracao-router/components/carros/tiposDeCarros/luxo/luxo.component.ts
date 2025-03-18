import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'carros-luxo',
  template: '<h1>Carros de luxo</h1>',
})
export class CarrosDeLuxoComponent implements OnInit {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID recuperado: ', this.id);
  }
}
