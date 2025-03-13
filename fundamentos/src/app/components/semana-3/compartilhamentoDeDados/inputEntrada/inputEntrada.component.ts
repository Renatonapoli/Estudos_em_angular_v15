import { Component } from '@angular/core';
import { DataService } from '../../injecaoDeDependencia/service/data.service';

@Component({
  selector: 'inputEntrada-component',
  templateUrl: './inputEntrada.component.html',
  styles: ['input { width: 100%; padding: 8px; font-size: 16px }'],
})
export class InputEntradaComponent {
  constructor(private dataService: DataService) {}

  onNameChange(event: Event) {
    const newName = (event.target as HTMLInputElement).value;
    this.dataService.updateName(newName);
  }
}
