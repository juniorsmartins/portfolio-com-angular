import { CursoService } from './../curso.service';
import * as M from 'materialize-css';

import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cursos',
  templateUrl: './cadastrar-cursos.component.html',
  styleUrls: ['./cadastrar-cursos.component.css']
})
export class CadastrarCursosComponent implements OnInit {

  chapeus = {
      formulario: 'Cadastrar Curso',
      ficha: 'Ficha'
  }

  formulario!: FormGroup;

  constructor
  (
    private service: CursoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      titulo: ['Formulário Reativo'],
      instituicao: ['Teste'],
      dataConclusao: [''],
      cargaHoraria: [''],
      preco: ['155'],
      link: ['Teste']
    })
  }

  salvarCadastroDoCurso() {
    this.service.criarCurso(this.formulario.value).subscribe(() =>
    {
      this.router.navigate(['/listarCursos']);
    });
  }

  limparFormularioDoCurso() {

  }

}
