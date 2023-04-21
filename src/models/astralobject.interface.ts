import { AstralObjectEnum } from '../enums/astralobject.enum'

export interface IAstralObject {
  kind: AstralObjectEnum
  column: number
  row: number
  skippable: boolean

  toJson: () => any
}
