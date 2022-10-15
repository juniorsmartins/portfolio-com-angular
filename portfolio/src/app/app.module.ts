import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarComponent } from './componentes/cursos/criar/criar.component';
import { FormsModule } from '@angular/forms';
import { Atividade7CabecalhoComponent } from './componentes/atividade7-cabecalho/atividade7-cabecalho.component';
import { Atividade7RodapeComponent } from './componentes/atividade7-rodape/atividade7-rodape.component';
import { CadastrarCursosComponent } from './componentes/especificos/cadastrar-cursos/cadastrar-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarComponent,
    Atividade7CabecalhoComponent,
    Atividade7RodapeComponent,
    CadastrarCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
