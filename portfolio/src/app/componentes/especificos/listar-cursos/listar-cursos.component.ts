import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  listaDeCursos = [
    {
      titulo: 'Java One',
      instituicao: 'Técnicas',
      dataConclusao: '08/02/2018',
      cargaHoraria: 90,
      link: 'http'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

}
