
import { AstralObjectEnum } from '../../enums/astralobject.enum'
import { IAstralObject } from '../../models/astralobject.interface'
import { IMegaverseRepository } from '../../repositories/megaverseRepository'
import { IAstralObjectService } from './astralobject.service'

export interface MegaverseConfig {
  managers: Map<AstralObjectEnum, IAstralObjectService>
  repository: IMegaverseRepository
}

export class MegaverseService {
  constructor(private readonly megaverseConfig: MegaverseConfig) { }

  async getMap(mapId: string): Promise<string[][]> {
    return await this.megaverseConfig.repository.get(mapId)
  }

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
          throw new Error(`Invalid value '${value}' at row ${rowIndex} and column ${columnIndex} when parsing`)
        }
      })

      curedMegaverse.push(curedMegaverseRow)
    })

    return curedMegaverse
  }

  validate(curedMegaverse: IAstralObject[][]): boolean {
    curedMegaverse.forEach((row, rowIndex) => {
      row.forEach((astralObject, columnIndex) => {
        const manager = this.megaverseConfig.managers.get(astralObject.kind)
        if (manager == null) {
          throw new Error(`No manager for kind ${astralObject.kind}`)
        }
        if (!manager.validate(astralObject, curedMegaverse)) {
          throw new Error(`Invalid value '${astralObject.kind}' at row ${rowIndex} and column ${columnIndex} when validating`)
        }
      })
    })
    return true
  }

  async save(mapId: string, curedMegaverse: IAstralObject[][]): Promise<void> {
    for (const row of curedMegaverse) {
      for (const astralObject of row.filter((ao) => ao.skippable === false)) {
        await new Promise(resolve => {
          setTimeout(resolve, 1000);
        });
        await this.megaverseConfig.repository.post(mapId, astralObject.kind.toLowerCase(), astralObject.toJson())
      }
    }
  }

  async process(mapId: string): Promise<boolean> {
    const map = await this.getMap(mapId)
    const curedMegaverse = this.parse(map)
    this.validate(curedMegaverse)
    await this.save(mapId, curedMegaverse)
    return true
  }
}
