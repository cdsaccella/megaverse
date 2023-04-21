import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from './astralobject.interface'

export class Cometh implements IAstralObject {
  kind: AstralObjectEnum
  column: number
  row: number
  direction: 'up' | 'down' | 'left' | 'right'

  constructor (row: number, column: number, direction: string) {
    this.kind = AstralObjectEnum.Soloon
    this.row = row
    this.column = column
    this.direction = direction.toLowerCase() as 'up' | 'down' | 'left' | 'right'
  }
}
