import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-excluir-cursos',
  templateUrl: './excluir-cursos.component.html',
  styleUrls: ['./excluir-cursos.component.css']
})
export class ExcluirCursosComponent implements OnInit {

  curso: Curso = {
    id: 0,
    titulo: '',
    instituicao: '',
    dataConclusao: '',
    cargaHoraria: 0,
    preco: '',
    link: ''
  }

  constructor(
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

  excluirCurso()
  {
    if(this.curso.id)
    {
      this.service.excluirCurso(this.curso.id).subscribe(() => {
        this.router.navigate(['/listarCursos']);
      })
    }
  }

  cancelarExcluirCurso()
  {
    this.router.navigate(['/listarCursos']);
  }
}
