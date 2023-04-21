import { IMegaverseRepository } from "../megaverseRepository";


export class MegaverseTestRepository implements IMegaverseRepository {

  async get(_: string): Promise<string[][]> {
    return [[]];
  }

  async post(_candidateId: string, _kind: string, _data: any): Promise<any> {
    return
  }

  async remove(_candidateId: string, _kind: string, _row: number, _column: number): Promise<any> {
    return
  }
}
