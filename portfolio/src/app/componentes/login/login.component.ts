import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './Usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
        Validators.minLength(5),
        Validators.maxLength(50)
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150)
      ])]
    })
  }

  salvarUsuarioNoLocalStorage() {
    if(this.formularioUsuario.valid) {

      localStorage.setItem("usuario", JSON.stringify(this.formularioUsuario.value));
//      localStorage.setItem("usuario2", JSON.stringify({login: this.usuario.login, senha: this.usuario.senha}));
//      localStorage.setItem('login', this.usuario.login);
//      localStorage.setItem('senha', this.usuario.senha);

      console.log("----- Salvar Usuário no Storage: " + localStorage.getItem('usuario'));
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
        console.log('Usuário salvo no JsonServer!');
      }).catch((exception) => {
        console.log(exception);
      }).finally(() => {
        console.log('Finalizada operação de salvamento!');
      })
    }
  }

  limparFormulario() {
    this.formularioUsuario.reset();
  }
}

