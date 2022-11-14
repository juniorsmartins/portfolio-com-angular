import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './Usuario.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  chapeus = {
    login: 'Security'
  }

  usuario: Usuario = {
    login: '',
    senha: ''
  }

  usuarios: Observable<Usuario[]> | undefined;

  constructor
  (
    private service: UsuarioService
  ) {}

  ngOnInit(): void {}

  salvarLoginLocalStorage() {
    localStorage.setItem("usuario", JSON.stringify({login: this.usuario.login, senha: this.usuario.senha}));
    localStorage.setItem('login', this.usuario.login);
    localStorage.setItem('senha', this.usuario.senha);

    console.log(JSON.parse(localStorage.getItem('usuario')!)); // publicado como objeto
    console.log(localStorage.getItem('usuario')); // publicado como string
    console.log(localStorage.getItem('login')); // string
    console.log(localStorage.getItem('senha')); // string

    console.log(this.usuario);
    this.service.criar(this.usuario);
    this.usuarios = this.service.lerTodos();

    this.limparFormulario();
  }

  limparFormulario() {
    this.usuario.login = '',
    this.usuario.senha = ''
  }


}
