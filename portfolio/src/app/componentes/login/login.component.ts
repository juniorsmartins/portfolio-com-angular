import { UsuarioService } from './Usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
      localStorage.setItem("usuario", JSON.stringify(this.formularioUsuario.value));
      console.log("----- Salvar Usuário no Storage: " + localStorage.getItem('usuario'));

//      localStorage.setItem("usuario2", JSON.stringify({login: this.usuario.login, senha: this.usuario.senha}));
//      localStorage.setItem('login', this.usuario.login);
//      localStorage.setItem('senha', this.usuario.senha);
//      console.log(JSON.parse(localStorage.getItem('usuario2')!)); // publicado como objeto
//      console.log(localStorage.getItem('usuario2')); // publicado como string
//      console.log(localStorage.getItem('login')); // string
//      console.log(localStorage.getItem('senha')); // string

      this.salvarUsuarioNoJsonServer();
      this.limparFormulario();
    }
  }

  salvarUsuarioNoJsonServer() {
    if(this.formularioUsuario.valid) {
      this.service.criar(this.formularioUsuario.value)
      .then(() => {
        console.log('Login - Tratamento Then!');
      }).catch((exception) => {
        console.log(exception);
      }).finally(() => {
        console.log('Finalizada operação Save!');
      })
    }
  }

  limparFormulario() {
    this.formularioUsuario.reset();
  }
}

