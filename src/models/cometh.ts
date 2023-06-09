import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from './astralobject.interface'

export class Cometh implements IAstralObject {
  kind: AstralObjectEnum
  column: number
  row: number
  direction: 'up' | 'down' | 'left' | 'right'
  skippable: boolean

  constructor (row: number, column: number, direction: string) {
    this.kind = AstralObjectEnum.Cometh
    this.row = row
    this.column = column
    this.direction = direction.toLowerCase() as 'up' | 'down' | 'left' | 'right'
    this.skippable = false
  }

  toJson (): any {
    return {
      row: this.row,
      column: this.column,
      direction: this.direction
    }
  }
}
