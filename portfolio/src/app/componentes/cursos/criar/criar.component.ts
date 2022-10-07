import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  criarAtividade2 = {
    id: '1',
    resultado:'resultado'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
