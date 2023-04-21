import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from '../models/astralobject.interface'

export interface IAstralObjectService {

  getKind: () => AstralObjectEnum

  parse: (row: number, column: number, value: string) => IAstralObject | undefined

  validate: (astralObject: IAstralObject, megaverse: IAstralObject[][]) => boolean
}
