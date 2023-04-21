import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from './astralobject.interface'

export class Polyanet implements IAstralObject {
  kind: AstralObjectEnum
  column: number
  row: number

  constructor (row: number, column: number) {
    this.kind = AstralObjectEnum.Polyanet
    this.row = row
    this.column = column
  }
}
