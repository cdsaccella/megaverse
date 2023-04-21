import express, { Router } from "express";
import { MegaverseController } from "../controllers/megaverseController";


export class MegaverseRoutes {
  apiRoutes: Router = express.Router();
  megaverseController: MegaverseController;

  constructor(megaverseController: MegaverseController) {
    this.megaverseController = megaverseController
  }

  getRoutes() {
    return [
      this.apiRoutes.get("/map/:candidateId", this.megaverseController.getMap.bind(this.megaverseController))
    ]
  }
}