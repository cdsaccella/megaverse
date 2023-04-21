import { Request, Response } from 'express'
import { MegaverseConfig, MegaverseService } from '../services/logic/megaverse.service'

export class MegaverseController {
  megaverseService: MegaverseService

  constructor (megaverseConfig: MegaverseConfig) {
    this.megaverseService = new MegaverseService(megaverseConfig)
  }

  async process (req: Request, res: Response): Promise<Response> {
    try {
      if (req.body.candidateId == null) {
        return res.status(400).json('CandidateId is required')
      }

      await this.megaverseService.process(req.body.candidateId)

      return res.status(200).json('Parkour to the moon!')
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json('Error processing map data: ' + error.message)
      }

      return res.status(500).json('Error processing map data')
    }
  }
}
