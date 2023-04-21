import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from '../models/astralobject.interface'
import { Polyanet } from '../models/polyanet'
import { IAstralObjectService } from './astralobject.service'

export class PolyanetService implements IAstralObjectService {
  getKind (): AstralObjectEnum {
    return AstralObjectEnum.Polyanet
  }

  parse (row: number, column: number, value: string): IAstralObject | undefined {
    if (value === 'POLYANET') {
      return new Polyanet(row, column)
    }
    return undefined
  }

  validate (_polyanet: IAstralObject, _megaverse: IAstralObject[][]): boolean {
    return true
  }
}
