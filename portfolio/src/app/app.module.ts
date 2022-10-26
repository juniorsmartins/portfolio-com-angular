import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Atividade7CabecalhoComponent } from './componentes/atividade7-cabecalho/atividade7-cabecalho.component';
import { Atividade7RodapeComponent } from './componentes/atividade7-rodape/atividade7-rodape.component';
import { CadastrarCursosComponent } from './componentes/especificos/cadastrar-cursos/cadastrar-cursos.component';
import { ListarCursosComponent } from './componentes/especificos/listar-cursos/listar-cursos.component';
import { ItemCursosComponent } from './componentes/especificos/item-cursos/item-cursos.component';
import { HttpClientModule } from '@angular/common/http';

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
    ItemCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
