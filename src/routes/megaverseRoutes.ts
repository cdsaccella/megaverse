import express, { Router } from 'express'
import { MegaverseController } from '../controllers/megaverseController'

export class MegaverseRoutes {
  apiRoutes: Router = express.Router()
  megaverseController: MegaverseController

  constructor (megaverseController: MegaverseController) {
    this.megaverseController = megaverseController
  }

  getRoutes (): Router[] {
    return [
      this.apiRoutes.post('/map', this.megaverseController.process.bind(this.megaverseController))
    ]
  }
}
