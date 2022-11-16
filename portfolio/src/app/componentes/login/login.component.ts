import { UsuarioService } from './Usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UsuarioService ]
})
export class LoginComponent implements OnInit {

  chapeus = {
    login: 'Security'
  }

  listaDeUsuarios: Usuario[] = [];

  formularioUsuario!: FormGroup;

  constructor
  (
    private service: UsuarioService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formularioUsuario = this.formBuilder.group({
      login: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(5),
        Validators.maxLength(50)
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(5),
        Validators.maxLength(150)
      ])]
    })
  }

  salvarUsuarioNoLocalStorage() {
    if(this.formularioUsuario.valid) {
      console.log("\n----- Início das operações de Salvar Usuário no Storage e de Criar Usuário no Json Server -----");
      localStorage.setItem("usuario", JSON.stringify(this.formularioUsuario.value));
      console.log("----- Concluído salvar Usuário no Storage -----")

//      localStorage.setItem("usuario2", JSON.stringify({login: this.usuario.login, senha: this.usuario.senha}));
//      localStorage.setItem('login', this.usuario.login);
//      localStorage.setItem('senha', this.usuario.senha);
//      console.log(JSON.parse(localStorage.getItem('usuario2')!)); // publicado como objeto
//      console.log(localStorage.getItem('usuario2')); // publicado como string
//      console.log(localStorage.getItem('login')); // string
//      console.log(localStorage.getItem('senha')); // string

      this.salvarUsuarioNoJsonServer();
    }
  }

  salvarUsuarioNoJsonServer() {
    console.log("\n----- Usuário será Criado no Json Server -----");
    if(this.formularioUsuario.valid) {
      this.service.criar(this.formularioUsuario.value)
      .then(() => {
        console.log('----- Usuário Criado com sucesso! -----');
      }).catch((exception) => {
        console.log(exception);
      }).finally(() => {
        console.log('----- Finally - Fim operação Criar! -----');
        this.limparFormulario();
        this.listarUsuariosSemPaginacao();
      })
    }
  }

  limparFormulario() {
    this.formularioUsuario.reset();
    console.log('\n----- Formulário limpo! -----\n')
  }

  listarUsuariosSemPaginacao() {
    this.service.lerTodos()
      .then((data) => this.listaDeUsuarios = data)
      .catch((e) => console.log(e))
      .finally(() => {
        console.log('\n----- Lista de Usuário no Json Server -----');
        this.listaDeUsuarios.forEach((usuario) => console.log(usuario));
      });
  }
}

