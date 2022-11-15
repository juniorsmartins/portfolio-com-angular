import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  criar(usuario: Usuario): Promise<Usuario>
  {
    const promessa = new Promise<Usuario>((resolve, reject) => {
      if(usuario.login == null || usuario.login == '') {
        reject('Login inválido!');
      }
      if(usuario.senha == null || usuario.senha == '') {
        reject('Senha inválida!');
      }
      setTimeout(() => {
        this.http.post<Usuario>(this.API, usuario)
        resolve(usuario);
      }, 5);
    })
    return promessa;
  }

  lerTodos(): Observable<Usuario[]>
  {
    console.log("----- lerTodos -----")
    return this.http.get<Usuario[]>(this.API)
      .pipe(
        tap(usuario => console.log(usuario))
      );
  }
}




