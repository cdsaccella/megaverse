import axios from "axios";
import { GoalMapData } from "../../models/apis/map.data";

export class MegaverseAPIService {
  BASE_URL = "https://challenge.crossmint.io/api"

  async getGoalMap(candidateId: string) {
    try {
      const response = await axios.get<GoalMapData>(this.BASE_URL + `/map/${candidateId}/goal`);
      return response.data;
    } catch (error) {
      throw new Error('Can not get goal map data');
    }
  }

  // async post(kind: string, data: any) {
  //   const { username, email, password } = createUserDto;

  //   // Crear el usuario en la base de datos

  //   return createdUser;
  // }
}
