import axios from 'axios'
import { GoalMapData } from '../../models/apis/map.data'

export class MegaverseAPIService {
  BASE_URL = 'https://challenge.crossmint.io/api'

  async getGoalMap (candidateId: string): Promise<GoalMapData> {
    try {
      const response = await axios.get<GoalMapData>(this.BASE_URL + `/map/${candidateId}/goal`)
      return response.data
    } catch (error) {
      throw new Error(`Can not get goal map data for ${candidateId}`)
    }
  }

  async post (candidateId: string, kind: string, data: any): Promise<any> {
    try {
      const response = await axios.post(this.BASE_URL + `/${kind}s`, { ...data, candidateId })
      return response.data
    } catch (error) {
      console.log(error)
      throw new Error(`Can not post data for ${candidateId} with kind ${kind}`)
    }
  }

  async delete (candidateId: string, kind: string, row: number, column: number): Promise<any> {
    try {
      const data = {
        row,
        column,
        candidateId
      }
      const response = await axios.delete(this.BASE_URL + `/${kind}s`, { data })
      return response.data
    } catch (error) {
      throw new Error(`Can not delete data for ${candidateId} with kind ${kind}`)
    }
  }
}
