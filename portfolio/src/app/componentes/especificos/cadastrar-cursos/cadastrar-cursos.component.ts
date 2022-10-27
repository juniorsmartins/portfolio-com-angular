import { CursoService } from './../curso.service';
import * as M from 'materialize-css';

import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';

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

  curso: Curso = {
    titulo: '',
    instituicao: '',
    dataConclusao: '',
    cargaHoraria: 0,
    preco: '',
    link: ''
  }

  constructor
  (
    private service: CursoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  salvarCadastroDoCurso() {
    this.service.criarCurso(this.curso).subscribe(() =>
    {
      this.router.navigate(['/listarCursos']);
    });
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
