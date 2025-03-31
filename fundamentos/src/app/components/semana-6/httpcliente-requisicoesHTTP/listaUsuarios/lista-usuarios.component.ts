import { Component, OnInit } from '@angular/core';
import { ListaUsuariosService } from '../service/lista-usuario.service';

@Component({
  selector: 'lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styles: [
    `
      .card {
        flex-wrap: wrap;
        padding: 4px;
        width: 200px;
        border: 1px solid blue;
        margin: 5px;
      }
    `,
  ],
})
export class ListaUsuarioComponent implements OnInit {
  lista: any[] = [];

  constructor(private usuarioService: ListaUsuariosService) {}

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((data) => {
      this.lista = data;
    });
  }
}
