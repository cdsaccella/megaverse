import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from './astralobject.interface'

export class Space implements IAstralObject {
  kind: AstralObjectEnum
  column: number
  row: number
  skippable: boolean

  constructor (row: number, column: number) {
    this.kind = AstralObjectEnum.Space
    this.row = row
    this.column = column
    this.skippable = true
  }

  toJson (): any {
    return {}
  }
}
