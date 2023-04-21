import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from '../models/astralobject.interface'
import { Polyanet } from '../models/polyanet'
import { Soloon } from '../models/soloon'
import { IAstralObjectService } from './astralobject.service'

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
    const { row, column } = soloon
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (i >= 0 && j >= 0 && i < megaverse.length && j < megaverse[i].length) {
          if (megaverse[i][j] instanceof Polyanet) {
            return true
          }
        }
      }
    }
    return false
  }
}
