import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from '../models/astralobject.interface'
import { IAstralObjectService } from './astralobject.service'

export interface MegaverseConfig {
  managers: Map<AstralObjectEnum, IAstralObjectService>
}

export class MegaverseService {
  constructor(private readonly megaverseConfig: MegaverseConfig) { }

  parse(rowMegaverse: string[][]): IAstralObject[][] {
    const curedMegaverse: IAstralObject[][] = []

    rowMegaverse.forEach((row, rowIndex) => {
      const curedMegaverseRow: IAstralObject[] = []

      row.forEach((value, columnIndex) => {
        const validObject = Array.from(this.megaverseConfig.managers.values()).some(
          (manager) => {
            const astralObject = manager.parse(rowIndex, columnIndex, value)
            if (astralObject != null) {
              curedMegaverseRow.push(astralObject)
              return true
            }
            return false
          })

        if (!validObject) {
          throw new Error(`Invalid value '${value}' at row ${rowIndex} and column ${columnIndex}`)
        }
      })

      curedMegaverse.push(curedMegaverseRow)
    })

    return curedMegaverse
  }

  validate(_curedMegaverse: IAstralObject[][]) {
    throw new Error('Method not implemented.')
  }

  async process(rowMegaverse: string[][]) {
    const curedMegaverse = this.parse(rowMegaverse)
    this.validate(curedMegaverse)

    // step to save the megaverse
  }
}
