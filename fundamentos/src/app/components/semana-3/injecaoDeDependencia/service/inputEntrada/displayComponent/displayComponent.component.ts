import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'display-component',
  templateUrl: './displayComponent.component.html',
  styles: ['h2 { color: blue; font-size: 24px; }'],
})
export class DisplayComponent implements OnInit {
  nome: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentName.subscribe((newName) => {
      this.nome = newName;
    });
  }
}
