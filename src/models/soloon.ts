import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from './astralobject.interface'

export class Soloon implements IAstralObject {
  kind: AstralObjectEnum
  column: number
  row: number
  color: 'blue' | 'red' | 'white' | 'purple'

  constructor (row: number, column: number, color: string) {
    this.kind = AstralObjectEnum.Soloon
    this.row = row
    this.column = column
    this.color = color.toLowerCase() as 'blue' | 'red' | 'white' | 'purple'
  }
}
