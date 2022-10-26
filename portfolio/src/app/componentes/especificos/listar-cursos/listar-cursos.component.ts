import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  listaDeCursos: Curso[] = [];

  constructor() {}

  ngOnInit(): void {}

}
