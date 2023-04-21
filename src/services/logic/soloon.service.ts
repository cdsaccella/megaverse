import { AstralObjectEnum } from '../../enums/astralobject.enum'
import { IAstralObject } from '../../models/astralobject.interface'
import { Polyanet } from '../../models/polyanet'
import { Soloon } from '../../models/soloon'
import { IAstralObjectService } from './astralobject.service'
import { getAdjacents } from './utils'

export class SoloonService implements IAstralObjectService {
  COLORS = ['BLUE', 'RED', 'PURPLE', 'WHITE']

  getKind (): AstralObjectEnum {
    return AstralObjectEnum.Soloon
  }

  parse (row: number, column: number, value: string): IAstralObject | undefined {
    const values = value.split('_')
    const color = values[0]
    return values.length === 2 && this.COLORS.includes(color) && values[1] === 'SOLOON' ? new Soloon(row, column, color) : undefined
  }

  validate (soloon: IAstralObject, megaverse: IAstralObject[][]): boolean {
    const adjacents = getAdjacents(megaverse, soloon.row, soloon.column)
    return adjacents.some(adjacent => adjacent instanceof Polyanet)
  }
}
