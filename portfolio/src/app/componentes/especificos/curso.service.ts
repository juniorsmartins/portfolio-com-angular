import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Curso } from './curso';
import { catchError, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = 'http://localhost:3000/cursos';

  errorsMsg!: string;

  constructor(private http: HttpClient) {}

  criarCurso(curso: Curso): Observable<Curso>
  {
    return this.http.post<Curso>(this.API, curso);
  }

  listarCursosComPaginacaoAndFiltro(pagina: number, filtro: any): Observable<Curso[]>
  {
    const itensPorPagina = 5;
    let params = new HttpParams().set("_page", pagina).set("_limit", itensPorPagina);

    if(filtro.trim().length > 2)
    {
      params = params.set("q", filtro);
    }

    return this.http.get<Curso[]>(this.API, { params: params });
  }

  listarCursosSemPaginacao(): Observable<Curso[]>
  {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        retry(2),
        catchError(error => {
          this.errorsMsg = '';
          if(error.error instanceof ErrorEvent) {
            this.errorsMsg = 'Erro lançado pelo lado do cliente.';
          } else {
            this.errorsMsg = this.getServerErrorMessage(error);
          }
          return throwError(this.errorsMsg);
        })
      );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch(error.status) {
      case 404: {
        return "Cursos não encontrados!";
      }
      case 403: {
        return "Acesso negado!";
      }
      case 500: {
        return "Erro interno do servidor.";
      }
      default: {
        return "Erro desconhecido do servidor";
      }
    }
  }

  excluirCurso(id: number): Observable<Curso>
  {
    const url = `${this.API}/${id}`;
    return this.http.delete<Curso>(url);
  }

  buscarCursoPorId(id: number): Observable<Curso>
  {
    const url = `${this.API}/${id}`;
    return this.http.get<Curso>(url);
  }

  editarCurso(curso: Curso): Observable<Curso>
  {
    const url = `${this.API}/${curso.id}`;
    return this.http.put<Curso>(url, curso);
  }
}

