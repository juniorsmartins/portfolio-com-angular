import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cursos',
  templateUrl: './item-cursos.component.html',
  styleUrls: ['./item-cursos.component.css']
})
export class ItemCursosComponent implements OnInit {

  @Input() curso = {
    titulo: '',
    instituicao: '',
    dataConclusao: '',
    cargaHoraria: 0,
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
