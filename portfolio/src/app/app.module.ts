import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Atividade7CabecalhoComponent } from './componentes/atividade7-cabecalho/atividade7-cabecalho.component';
import { Atividade7RodapeComponent } from './componentes/atividade7-rodape/atividade7-rodape.component';
import { CadastrarCursosComponent } from './componentes/especificos/cadastrar-cursos/cadastrar-cursos.component';
import { ListarCursosComponent } from './componentes/especificos/listar-cursos/listar-cursos.component';
import { ItemCursosComponent } from './componentes/especificos/item-cursos/item-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirCursosComponent } from './componentes/especificos/excluir-cursos/excluir-cursos.component';
import { EditarCursosComponent } from './componentes/especificos/editar-cursos/editar-cursos.component';
import { ContatosComponent } from './componentes/atividade7-rodape/contatos/contatos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CalculadorComponent } from './componentes/dashboard/calculador/calculador.component';
import { BotaoCarregarMaisItensComponent } from './componentes/especificos/listar-cursos/botao-carregar-mais-itens/botao-carregar-mais-itens.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    Atividade7CabecalhoComponent,
    Atividade7RodapeComponent,
    CadastrarCursosComponent,
    ListarCursosComponent,
    ItemCursosComponent,
    ExcluirCursosComponent,
    EditarCursosComponent,
    ContatosComponent,
    DashboardComponent,
    CalculadorComponent,
    BotaoCarregarMaisItensComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
