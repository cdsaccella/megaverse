import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from './astralobject.interface'

export class Soloon implements IAstralObject {
  kind: AstralObjectEnum
  column: number
  row: number
  color: string

  constructor(row: number, column: number, color: string) {
    this.kind = AstralObjectEnum.Soloon
    this.row = row
    this.column = column
    this.color = color
  }
}
