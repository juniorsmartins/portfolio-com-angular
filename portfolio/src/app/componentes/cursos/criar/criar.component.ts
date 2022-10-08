import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  valor: number | undefined;

  somar1ate100() {
    console.log('---- calculando... ----');

    var somaTotal = 0;
    for (let contador = 1; contador <= 100; contador++) {
      somaTotal += contador;
      console.log(somaTotal);
    }

    console.log('---- concluído ----');
  }

  atividade1 = {
    resultado:'RESULTADO 1:',
    subtitulo:'clique F12 e veja no console.'
  }

  calcularNumeroDeNotasPorValor() {
    this.atividade2.umReal = 0;
    this.atividade2.doisReais = 0;
    this.atividade2.cincoReais = 0;
    this.atividade2.dezReais = 0;
    this.atividade2.vinteReais = 0;
    this.atividade2.cinquentaReais = 0;
    this.atividade2.cemReais = 0;

    while (this.valor != null && this.valor >= 1) {
      if (this.valor >= 100) {
        this.valor -= 100;
        this.atividade2.cemReais++;
      } else if (this.valor >= 50) {
        this.valor -= 50;
        this.atividade2.cinquentaReais++;
      } else if (this.valor >= 20) {
        this.valor -= 20;
        this.atividade2.vinteReais++;
      } else if (this.valor >= 10) {
        this.valor -= 10;
        this.atividade2.dezReais++;
      } else if (this.valor >= 5) {
        this.valor -= 5;
        this.atividade2.cincoReais++;
      } else if (this.valor >= 2) {
        this.valor -= 2;
        this.atividade2.doisReais++;
      } else if (this.valor = 1) {
        this.valor -= 1;
        this.atividade2.umReal++;
      }
    }
  }

  atividade2 = {
    resultado:'RESULTADO 2',
    subtitulo: 'Número de notas por valor:',
    umReal: 0,
    doisReais: 0,
    cincoReais: 0,
    dezReais: 0,
    vinteReais: 0,
    cinquentaReais: 0,
    cemReais: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
