import { ExcluirCursosComponent } from './componentes/especificos/excluir-cursos/excluir-cursos.component';
import { ListarCursosComponent } from './componentes/especificos/listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './componentes/especificos/cadastrar-cursos/cadastrar-cursos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastrarCursos',
    pathMatch: 'full'
  },
  {
    path: 'cadastrarCursos',
    component: CadastrarCursosComponent
  },
  {
    path: 'listarCursos',
    component: ListarCursosComponent
  },
  {
    path: 'especificos/deletarCursos/:id',
    component: ExcluirCursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
