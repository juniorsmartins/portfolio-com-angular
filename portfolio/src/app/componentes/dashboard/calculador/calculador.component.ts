import { catchError, empty, Observable } from 'rxjs';
import { CursoService } from './../../especificos/curso.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent implements OnInit {

  @Input() painelKPIFilho = {
    totalCursos: 0,
    totalCargaHoraria: 0,
    totalPreco: 0
  }

  constructor(private service: CursoService)  {}

  ngOnInit(): void {

    this.service.listarCursosSemPaginacao()
      .pipe(
        catchError(error => {
          console.log('Tratamento: ' + error);
          return empty();
        })
      ).subscribe((lista$) => {
        this.painelKPIFilho.totalCursos = lista$.length;
        this.painelKPIFilho.totalCargaHoraria = 0;
        this.painelKPIFilho.totalPreco = 0;
        for(let indice = 0; indice < lista$.length; indice++) {
          this.painelKPIFilho.totalCargaHoraria += lista$[indice].cargaHoraria;
          this.painelKPIFilho.totalPreco += parseFloat(lista$[indice].preco);
        }
      });
  }
}

