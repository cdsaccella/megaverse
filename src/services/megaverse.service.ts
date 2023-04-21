import { AstralObjectEnum } from '../enums/astralobject.enum'
import { IAstralObject } from '../models/astralobject.interface'
import { IAstralObjectService } from './astralobject.service'

export interface MegaverseConfig {
  managers: Map<AstralObjectEnum, IAstralObjectService>
}

export class MegaverseService {
  constructor (private readonly megaverseConfig: MegaverseConfig) { }

  parse (rowMegaverse: string[][]): IAstralObject[][] {
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

  validate (curedMegaverse: IAstralObject[][]): boolean {
    curedMegaverse.forEach((row, rowIndex) => {
      row.forEach((astralObject, columnIndex) => {
        const manager = this.megaverseConfig.managers.get(astralObject.kind)
        if (manager == null) {
          throw new Error(`No manager for kind ${astralObject.kind}`)
        }
        if (!manager.validate(astralObject, curedMegaverse)) {
          throw new Error(`Invalid value '${astralObject.kind}' at row ${rowIndex} and column ${columnIndex}`)
        }
      })
    })
    return true
  }

  async process (rowMegaverse: string[][]): Promise<boolean> {
    const curedMegaverse = this.parse(rowMegaverse)
    this.validate(curedMegaverse)
    // step to save the megaverse
    return true
  }
}
