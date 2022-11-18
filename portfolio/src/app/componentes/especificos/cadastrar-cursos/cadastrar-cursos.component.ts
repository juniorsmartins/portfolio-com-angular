import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
      titulo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.maxLength(150)
      ])],
      instituicao: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.maxLength(150)
      ])],
      cargaHoraria: ['', [Validators.required]],
      dataConclusao: ['', [Validators.required]],
      preco: [''],
      link: ['']
    })
  }

  salvarCadastroDoCurso()
  {
    if(this.formulario.valid)
    {
      this.service.criarCurso(this.formulario.value).subscribe(() =>
      {
        this.router.navigate(['/listarCursos']);
      });
    }
  }

  limparFormularioDoCurso() {
    this.formulario.reset();
  }
}

