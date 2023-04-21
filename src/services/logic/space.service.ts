import { AstralObjectEnum } from '../../enums/astralobject.enum'
import { IAstralObject } from '../../models/astralobject.interface'
import { Space } from '../../models/space'
import { IAstralObjectService } from './astralobject.service'

export class SpaceService implements IAstralObjectService {
  getKind (): AstralObjectEnum {
    return AstralObjectEnum.Space
  }

  parse (row: number, column: number, value: string): IAstralObject | undefined {
    if (value === 'SPACE') {
      return new Space(row, column)
    }
    return undefined
  }

  validate (_: IAstralObject): boolean {
    return true
  }
}
