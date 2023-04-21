import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from '../models/astralobject.interface'
import { Cometh } from '../models/cometh'
import { Space } from '../models/space'
import { IAstralObjectService } from './astralobject.service'
import { getAdjacents } from './utils'

export class ComethService implements IAstralObjectService {
  COLORS = ['UP', 'DOWN', 'LEFT', 'RIGHT']

  getKind (): AstralObjectEnum {
    return AstralObjectEnum.Cometh
  }

  parse (row: number, column: number, value: string): IAstralObject | undefined {
    const values = value.split('_')
    const direction = values[0]
    return values.length === 2 && this.COLORS.includes(direction) && values[1] === 'COMETH' ? new Cometh(row, column, direction) : undefined
  }

  validate (cometh: IAstralObject, megaverse: IAstralObject[][]): boolean {
    const adjacents = getAdjacents(megaverse, cometh.row, cometh.column)
    return adjacents.every(adjacent => adjacent instanceof Space)
  }
}
