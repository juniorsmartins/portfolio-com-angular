import { Observable, ReplaySubject, tap } from 'rxjs';
import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API_USUARIOS = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  criar(usuario: Usuario): Promise<Usuario>
  {
    return new Promise<Usuario>((resolve, reject) =>
      this.http.post<Usuario>(this.API_USUARIOS, usuario).subscribe(data => resolve(data), (e:any) => reject(e))
    );
  }

  lerTodos(): Promise<Usuario[]>
  {
    return new Promise<Usuario[]>((resolve, reject) =>
      this.http.get<Usuario[]>(this.API_USUARIOS).subscribe(data => resolve(data), (e: any) => reject(e))
    );
  }
}




