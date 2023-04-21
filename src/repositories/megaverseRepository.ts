export interface IMegaverseRepository {
  get: (candidateId: string) => Promise<string[][]>
  post: (candidateId: string, kind: string, data: any) => Promise<any>
  remove: (candidateId: string, kind: string, row: number, column: number) => Promise<any>
}
