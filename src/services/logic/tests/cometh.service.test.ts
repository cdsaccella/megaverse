import { Polyanet } from '../../../models/polyanet'
import { Cometh } from '../../../models/cometh'
import { Space } from '../../../models/space'
import { ComethService } from '../cometh.service'

let comethService: ComethService

beforeAll(() => {
  comethService = new ComethService()
})

describe('Parse Up Cometh', () => {
  it('should parse the the astral object as up cometh', async () => {
    const value = 'UP_COMETH'
    const result = comethService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Cometh).toBeTruthy()
    const cometh = result as Cometh
    expect(cometh.direction).toBe('up')
  })
})

describe('Parse Down Cometh', () => {
  it('should parse the the astral object as down cometh', async () => {
    const value = 'DOWN_COMETH'
    const result = comethService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Cometh).toBeTruthy()
    const cometh = result as Cometh
    expect(cometh.direction).toBe('down')
  })
})

describe('Parse Left Cometh', () => {
  it('should parse the the astral object as left cometh', async () => {
    const value = 'LEFT_COMETH'
    const result = comethService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Cometh).toBeTruthy()
    const cometh = result as Cometh
    expect(cometh.direction).toBe('left')
  })
})

describe('Parse Right Cometh', () => {
  it('should parse the the astral object as right cometh', async () => {
    const value = 'RIGHT_COMETH'
    const result = comethService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Cometh).toBeTruthy()
    const cometh = result as Cometh
    expect(cometh.direction).toBe('right')
  })
})

describe('No parse RightLeft Cometh', () => {
  it('shouldnt parse the astral object as cometh', async () => {
    const value = 'RIGHTLEFT_COMETH'
    const result = comethService.parse(0, 0, value)
    expect(result).toBeUndefined()
  })
})

describe('Cometh without polyanet should be valid', () => {
  it('cometh without polyanet should be valid', async () => {
    const megaverse = [[new Space(0, 0), new Cometh(0, 1, 'up')], [new Space(1, 0), new Space(1, 1)]]
    const result = comethService.validate(megaverse[0][1], megaverse)
    expect(result).toBeTruthy()
  })
})

describe('Cometh with polyanet should be valid', () => {
  it('cometh with polyanet should be valid', async () => {
    const megaverse = [[new Space(0, 0), new Cometh(0, 1, 'up')], [new Space(1, 0), new Polyanet(1, 1)]]
    const result = comethService.validate(megaverse[0][1], megaverse)
    expect(result).toBeTruthy()
  })
})
