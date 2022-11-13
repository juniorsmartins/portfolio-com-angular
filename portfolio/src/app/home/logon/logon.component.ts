import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  chapeus = {
    login: 'Security'
  }

  usuario = {
    login: '',
    senha: ''
  }

  constructor() {};

  ngOnInit(): void {}

  salvarLoginLocalStorage() {
    localStorage.setItem("usuario", JSON.stringify({login: this.usuario.login, senha: this.usuario.senha}));
    localStorage.setItem('login', this.usuario.login);
    localStorage.setItem('senha', this.usuario.senha);

    console.log(JSON.parse(localStorage.getItem('usuario')!)); // publicado como objeto
    console.log(localStorage.getItem('usuario')); // publicado como string
    console.log(localStorage.getItem('login')); // string
    console.log(localStorage.getItem('senha')); // string

    this.limparFormulario();
  }

  limparFormulario() {
    this.usuario.login = '',
    this.usuario.senha = ''
  }

}
