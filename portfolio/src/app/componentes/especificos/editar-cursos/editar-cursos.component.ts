import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';

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

  curso: Curso = {
    id: 0,
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarCursoPorId(parseInt(id!)).subscribe((curso) => {
      this.curso = curso;
    })
  }

  salvarEdicaoDoCadastroDoCurso() {
    this.service.editarCurso(this.curso).subscribe(() =>
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

  cancelarFormularioDoCurso()
  {
    this.router.navigate(['/listarCursos']);
  }
}
