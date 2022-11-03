import { CursoService } from './../../especificos/curso.service';
import { Component, Input, OnInit } from '@angular/core';
import { Curso } from './../../especificos/curso';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent implements OnInit {

  @Input() totalCursosFilho!: number;

  @Input() painelKPIFilho = {
    totalCursos: 10,
    totalCargaHoraria: 10,
    totalPreco: 10
  }

  listaDeCursos: Curso[] = [];

  constructor(private service: CursoService)  {}

  ngOnInit(): void {
    this.service.listarCursos().subscribe((listaDeCursos) => {
      this.listaDeCursos = listaDeCursos;
      this.totalCursosFilho = listaDeCursos.length;

      this.painelKPIFilho.totalCursos = listaDeCursos.length;
      this.painelKPIFilho.totalCargaHoraria = 0;
      this.painelKPIFilho.totalPreco = 0;
      for (let index = 0; index < listaDeCursos.length; index++) {
        this.painelKPIFilho.totalCargaHoraria += listaDeCursos[index].cargaHoraria;
        this.painelKPIFilho.totalPreco += parseFloat(listaDeCursos[index].preco);
      }
    });
  }
}
