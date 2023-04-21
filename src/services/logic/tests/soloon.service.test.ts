import { Polyanet } from '../../../models/polyanet'
import { Soloon } from '../../../models/soloon'
import { Space } from '../../../models/space'
import { SoloonService } from '../soloon.service'

let soloonService: SoloonService

beforeAll(() => {
  soloonService = new SoloonService()
})

describe('Parse Red Soloon', () => {
  it('should parse the the astral object as red soloon', async () => {
    const value = 'RED_SOLOON'
    const result = soloonService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Soloon).toBeTruthy()
    const soloon = result as Soloon
    expect(soloon.color).toBe('red')
  })
})

describe('Parse Blue Soloon', () => {
  it('should parse the the astral object as blue soloon', async () => {
    const value = 'BLUE_SOLOON'
    const result = soloonService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Soloon).toBeTruthy()
    const soloon = result as Soloon
    expect(soloon.color).toBe('blue')
  })
})

describe('Parse Purple Soloon', () => {
  it('should parse the the astral object as purple soloon', async () => {
    const value = 'PURPLE_SOLOON'
    const result = soloonService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Soloon).toBeTruthy()
    const soloon = result as Soloon
    expect(soloon.color).toBe('purple')
  })
})

describe('Parse White Soloon', () => {
  it('should parse the the astral object as white soloon', async () => {
    const value = 'WHITE_SOLOON'
    const result = soloonService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Soloon).toBeTruthy()
    const soloon = result as Soloon
    expect(soloon.color).toBe('white')
  })
})

describe('No parse Black Soloon', () => {
  it('shouldnt parse the astral object as soloon', async () => {
    const value = 'BLACK_SOLOON'
    const result = soloonService.parse(0, 0, value)
    expect(result).toBeUndefined()
  })
})

describe('Soloon with polyanet should be valid', () => {
  it('soloon with polyanet should be valid', async () => {
    const megaverse = [[new Space(0, 0), new Soloon(0, 1, 'red')], [new Space(1, 0), new Polyanet(1, 1)]]
    const result = soloonService.validate(megaverse[0][1], megaverse)
    expect(result).toBeTruthy()
  })
})

describe('Soloon without polyanet shouldnt be valid', () => {
  it('soloon without polyanet shouldnt be valid', async () => {
    const megaverse = [[new Space(0, 0), new Soloon(0, 1, 'red')], [new Space(1, 0), new Space(1, 1)]]
    const result = soloonService.validate(megaverse[0][1], megaverse)
    expect(result).toBeFalsy()
  })
})
