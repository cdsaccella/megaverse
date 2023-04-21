import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from './astralobject.interface'

export class Soloon implements IAstralObject {
  kind: AstralObjectEnum
  column: number
  row: number
  color: 'blue' | 'red' | 'white' | 'purple'
  skippable: boolean

  constructor (row: number, column: number, color: string) {
    this.kind = AstralObjectEnum.Soloon
    this.row = row
    this.column = column
    this.color = color.toLowerCase() as 'blue' | 'red' | 'white' | 'purple'
    this.skippable = false
  }

  toJson (): any {
    return {
      row: this.row,
      column: this.column,
      color: this.color
    }
  }
}
