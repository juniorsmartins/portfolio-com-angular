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

  criar(usuario: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>(this.API, usuario);
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




