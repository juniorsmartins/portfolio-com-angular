import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = 'http://localhost:3000/curso';

  constructor(private http: HttpClient) {}

  criarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.API, curso);
  }

  listarCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API);
  }

  excluirCurso(id: number): Observable<Curso> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Curso>(url);
  }

  buscarCursoPorId(id: number): Observable<Curso> {
    const url = `${this.API}/${id}`;
    return this.http.get<Curso>(url);
  }

  editarCurso(curso: Curso): Observable<Curso> {
    const url = `${this.API}/${curso.id}`;
    return this.http.put<Curso>(url, curso);
  }
}

