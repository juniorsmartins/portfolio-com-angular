import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-item-cursos',
  templateUrl: './item-cursos.component.html',
  styleUrls: ['./item-cursos.component.css']
})
export class ItemCursosComponent implements OnInit {

  @Input() curso: Curso = {
    id: 0,
    titulo: '',
    instituicao: '',
    dataConclusao: '',
    cargaHoraria: 0,
    preco: '',
    link: ''
  }

  constructor() {}

  ngOnInit(): void {}

}


