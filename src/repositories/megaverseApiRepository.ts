import { MegaverseAPIService } from '../services/apis/megaverseApi.service'
import { IMegaverseRepository } from './megaverseRepository'

export class MegaverseAPIRepository implements IMegaverseRepository {
  megaverseAPIService: MegaverseAPIService

  constructor(megaverseAPIService: MegaverseAPIService) {
    this.megaverseAPIService = megaverseAPIService
  }

  async get(candidateId: string): Promise<string[][]> {
    return (await this.megaverseAPIService.getGoalMap(candidateId)).goal
  }

  async post(candidateId: string, kind: string, data: any): Promise<any> {
    return await this.megaverseAPIService.post(candidateId, kind, data)
  }

  async remove(candidateId: string, kind: string, row: number, column: number): Promise<any> {
    return await this.megaverseAPIService.delete(candidateId, kind, row, column)
  }
}
