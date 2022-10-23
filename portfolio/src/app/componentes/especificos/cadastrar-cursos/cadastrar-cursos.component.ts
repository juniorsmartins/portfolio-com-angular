import * as M from 'materialize-css';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cursos',
  templateUrl: './cadastrar-cursos.component.html',
  styleUrls: ['./cadastrar-cursos.component.css']
})
export class CadastrarCursosComponent implements OnInit {

    chapeus = {
      formulario: 'Formulário de cadastro',
      ficha: 'Ficha'
  }

  curso = {
    titulo: '',
    instituicao: '',
    dataConclusao: '',
    cargaHoraria: 0,
    link: ''
  }

  constructor() {}

  ngOnInit(): void {}

  salvarCadastroDoCurso() {
    alert("Curso cadastrado com sucesso!");
  }

  limparFormularioDoCurso() {
    alert("Formulário limpo com sucesso!");
  }

}
