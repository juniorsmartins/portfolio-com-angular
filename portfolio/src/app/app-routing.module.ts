import { ContatosComponent } from './componentes/contatos/contatos.component';
import { EditarCursosComponent } from './componentes/especificos/editar-cursos/editar-cursos.component';
import { ExcluirCursosComponent } from './componentes/especificos/excluir-cursos/excluir-cursos.component';
import { ListarCursosComponent } from './componentes/especificos/listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './componentes/especificos/cadastrar-cursos/cadastrar-cursos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastrarCurso',
    pathMatch: 'full'
  },
  {
    path: 'cadastrarCurso',
    component: CadastrarCursosComponent
  },
  {
    path: 'listarCursos',
    component: ListarCursosComponent
  },
  {
    path: 'especificos/excluirCurso/:id',
    component: ExcluirCursosComponent
  },
  {
    path: 'especificos/editarCurso/:id',
    component: EditarCursosComponent
  },
  {
    path: 'contatos',
    component: ContatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
