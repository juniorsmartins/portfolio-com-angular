import { NumberSymbol } from "@angular/common"

export interface Curso
{
  id: number,
  titulo: string,
  instituicao: string,
  dataConclusao: Date,
  cargaHoraria: number,
  preco: string,
  link: string
}
