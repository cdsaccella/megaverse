import { Request, Response } from "express";
import { MegaverseAPIService } from "../services/apis/megaverseApi.service";

export class MegaverseController {
  megaverseAPIService: MegaverseAPIService;

  constructor(megaverseAPIService: MegaverseAPIService) {
    this.megaverseAPIService = megaverseAPIService;
  }

  async getMap(req: Request, res: Response) {
    try {
      if (!req.params.candidateId) {
        return res.status(400).json("CandidateId is required");
      }

      const data = await this.megaverseAPIService.getGoalMap(req.params.candidateId);

      if (!data.goal) {
        return res.status(404).json("Not map data found");
      }

      return res.status(200).json(data.goal);
    } catch (error) {
      return res.status(500).json("Error fetching map data");
    }
  }
}