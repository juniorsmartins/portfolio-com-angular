import * as M from 'materialize-css';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cursos',
  templateUrl: './cadastrar-cursos.component.html',
  styleUrls: ['./cadastrar-cursos.component.css']
})
export class CadastrarCursosComponent implements OnInit {

    chapeus = {
      formulario: 'Formulário para cadastrar cursos',
      ficha: 'Ficha'
  }

  curso = {
    titulo: '',
    instituicao: '',
    dataConclusao: '',
    cargaHoraria: 0,
    preco: '',
    link: ''
  }

  constructor() {}

  ngOnInit(): void {}

  salvarCadastroDoCurso() {
    alert("Curso cadastrado com sucesso!");
  }

  limparFormularioDoCurso() {
    this.curso.titulo = '';
    this.curso.instituicao = '';
    this.curso.dataConclusao = '';
    this.curso.cargaHoraria = 0;
    this.curso.preco = '';
    this.curso.link = '';
  }

}
