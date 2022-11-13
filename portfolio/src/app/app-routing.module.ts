import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ContatosComponent } from './componentes/atividade7-rodape/contatos/contatos.component';
import { EditarCursosComponent } from './componentes/especificos/editar-cursos/editar-cursos.component';
import { ExcluirCursosComponent } from './componentes/especificos/excluir-cursos/excluir-cursos.component';
import { ListarCursosComponent } from './componentes/especificos/listar-cursos/listar-cursos.component';
import { CadastrarCursosComponent } from './componentes/especificos/cadastrar-cursos/cadastrar-cursos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
