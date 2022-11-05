import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {

  chapeus = {
    formulario: 'Atualizar Curso',
    ficha: 'Ficha'
  }

  formulario!: FormGroup;

  constructor
  (
    private service: CursoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarCursoPorId(parseInt(id!)).subscribe((curso) =>
    {
      this.formulario = this.formBuilder.group
      ({
        id: [curso.id],
        titulo: [curso.titulo, Validators.compose
        ([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.maxLength(150)
        ])],
        instituicao: [curso.instituicao, Validators.compose
        ([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.maxLength(150)
        ])],
        cargaHoraria: [curso.cargaHoraria, [Validators.required]],
        dataConclusao: [curso.dataConclusao, [Validators.required]],
        preco: [curso.preco],
        link: [curso.link]
      })
    })
  }

  salvarEdicaoDoCadastroDoCurso()
  {
    console.log(this.formulario.status);
    if(this.formulario.valid)
    {
      this.service.editarCurso(this.formulario.value).subscribe(() =>
      {
        this.router.navigate(['/listarCursos']);
      });
    }
  }

  limparFormularioDoCurso() {
    this.formulario.reset();
  }

  cancelarFormularioDoCurso()
  {
    this.router.navigate(['/listarCursos']);
  }
}
