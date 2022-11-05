import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  listaDeCursos: Curso[] = [];
  paginaAtual: number = 1;
  existemMaisCursos: boolean = true;
  filtro: any = '';

  constructor(private service: CursoService) {}

  ngOnInit(): void {
    this.service.listarCursosComPaginacaoAndFiltro(this.paginaAtual, this.filtro).subscribe((listaDeCursos) => {
      this.listaDeCursos = listaDeCursos;
    });
  }

  carregarMaisCursos() {
    this.service.listarCursosComPaginacaoAndFiltro(++this.paginaAtual, this.filtro).subscribe(listaDeCursos => {
      this.listaDeCursos.push(...listaDeCursos);
      if(!listaDeCursos.length) {
        this.existemMaisCursos = false;
      }
    })
  }

  pesquisarCursos()
  {
    this.existemMaisCursos = true;
    this.paginaAtual = 1;
    this.service.listarCursosComPaginacaoAndFiltro(this.paginaAtual, this.filtro).subscribe(listaDeCursos =>
    {
      this.listaDeCursos = listaDeCursos;
    })
  }
}
