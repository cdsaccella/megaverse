import { AstralObjectEnum } from '../../enums/astralobject.enum'
import { IAstralObject } from '../../models/astralobject.interface'
import { Cometh } from '../../models/cometh'
import { IAstralObjectService } from './astralobject.service'

export class ComethService implements IAstralObjectService {
  DIRECTIONS = ['UP', 'DOWN', 'LEFT', 'RIGHT']

  getKind(): AstralObjectEnum {
    return AstralObjectEnum.Cometh
  }

  parse(row: number, column: number, value: string): IAstralObject | undefined {
    const values = value.split('_')
    const direction = values[0]
    return values.length === 2 && this.DIRECTIONS.includes(direction) && values[1] === 'COMETH' ? new Cometh(row, column, direction) : undefined
  }

  validate(_cometh: IAstralObject, _megaverse: IAstralObject[][]): boolean {
    return true;
  }
}
