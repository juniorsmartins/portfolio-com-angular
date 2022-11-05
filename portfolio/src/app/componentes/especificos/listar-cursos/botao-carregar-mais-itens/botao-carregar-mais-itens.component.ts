import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais-itens',
  templateUrl: './botao-carregar-mais-itens.component.html',
  styleUrls: ['./botao-carregar-mais-itens.component.css']
})
export class BotaoCarregarMaisItensComponent implements OnInit {

  @Input() existemMaisCursos: boolean = false;

  constructor() {}

  ngOnInit(): void {}

}
