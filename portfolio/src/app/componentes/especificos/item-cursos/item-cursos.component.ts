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
    dataConclusao: new Date,
    cargaHoraria: 0,
    preco: '',
    link: ''
  }

  constructor() { }

  ngOnInit(): void {}

  larguraCardCurso(): string {
    if(this.curso.titulo.length >= 256) {
      return 'nome-de-estilo-conforme-tamanho-aqui-e-grande';
    }
    return 'nome-de-estilo-conforme-tamanho-aqui-e-pequeno';
  }

  editarCadastroDoCurso() {
    alert("Curso editado com sucesso!");
  }

  deletarCadastroDoCurso() {
    alert("Curso deletado com sucesso!");
  }

  detalharCadastroDoCurso() {
    alert("Curso detalhado com sucesso!");
  }

}
