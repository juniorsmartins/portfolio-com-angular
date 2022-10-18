import * as M from 'materialize-css';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cursos',
  templateUrl: './cadastrar-cursos.component.html',
  styleUrls: ['./cadastrar-cursos.component.css']
})
export class CadastrarCursosComponent implements OnInit {

    chapeus = {
      formulario: 'Formulário',
      salvar: 'Salvar',
      limpar: 'Limpar'
  }

  curso = {
    titulo: 'Microserviços com Java e Spring',
    instituicao: 'Alura',
    horas: 40,
    link: 'www.etc.com.br'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
