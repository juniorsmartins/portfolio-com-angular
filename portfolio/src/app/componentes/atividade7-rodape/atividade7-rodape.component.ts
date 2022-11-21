import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade7-rodape',
  templateUrl: './atividade7-rodape.component.html',
  styleUrls: ['./atividade7-rodape.component.css']
})
export class Atividade7RodapeComponent implements OnInit {

  ano: number;

  constructor() {
    this.ano = new Date().getFullYear();
  }

  ngOnInit(): void { }
}

