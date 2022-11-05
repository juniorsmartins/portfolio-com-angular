import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() totalCursosPai = 0;

  @Output() painelKPIPai = {
    totalCursos: 0,
    totalCargaHoraria: 0,
    totalPreco: 0
  }

  constructor() { }

  ngOnInit(): void {}
}

