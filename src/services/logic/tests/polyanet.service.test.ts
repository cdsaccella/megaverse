import { Polyanet } from '../../../models/polyanet'
import { PolyanetService } from '../polyanet.service'

let polyanetService: PolyanetService

beforeAll(() => {
  polyanetService = new PolyanetService()
})

describe('Parse Polyanet', () => {
  it('should parse the the astral object as polyanet', async () => {
    const value = 'POLYANET'
    const result = polyanetService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Polyanet).toBeTruthy()
  })
})

describe('No parse Polyanet', () => {
  it('shouldnt parse the astral object as polyanet', async () => {
    const value = 'NOT_POLYANET'
    const result = polyanetService.parse(0, 0, value)
    expect(result).toBeUndefined()
  })
})
