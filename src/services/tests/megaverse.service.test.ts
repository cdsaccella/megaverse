import { AstralObjectEnum } from '../../enums/astralobject.enum'
import { Polyanet } from '../../models/polyanet'
import { Space } from '../../models/space'
import { MegaverseService } from '../megaverse.service'
import { PolyanetService } from '../polyanet.service'
import { SpaceService } from '../space.service'

let megaverseService: MegaverseService

beforeAll(() => {
  const megaverseConfig = {
    managers: new Map()
  }
  megaverseConfig.managers.set(AstralObjectEnum.Space, new SpaceService())
  megaverseConfig.managers.set(AstralObjectEnum.Polyanet, new PolyanetService())
  megaverseService = new MegaverseService(megaverseConfig)
})

describe('Recognize Space', () => {
  it('should recognize space', async () => {
    const megaverse = [['SPACE', 'SPACE'], ['SPACE', 'SPACE']]
    const curedMegaverse = megaverseService.parse(megaverse)
    expect(curedMegaverse).toBeDefined()
    expect(curedMegaverse.length).toBe(2)
    expect(curedMegaverse[0].length).toBe(2)
    expect(curedMegaverse[1].length).toBe(2)
    curedMegaverse.forEach((row) => { row.forEach((value) => { expect(value).toBeDefined() }) })
    curedMegaverse.forEach((row) => { row.forEach((value) => { expect(value instanceof Space).toBeTruthy() }) })
  })
})

describe('Recognize Polyanet', () => {
  it('should recognize polyanet', async () => {
    const megaverse = [['POLYANET', 'POLYANET'], ['POLYANET', 'POLYANET']]
    const curedMegaverse = megaverseService.parse(megaverse)
    expect(curedMegaverse).toBeDefined()
    expect(curedMegaverse.length).toBe(2)
    expect(curedMegaverse[0].length).toBe(2)
    expect(curedMegaverse[1].length).toBe(2)
    curedMegaverse.forEach((row) => { row.forEach((value) => { expect(value).toBeDefined() }) })
    curedMegaverse.forEach((row) => { row.forEach((value) => { expect(value instanceof Polyanet).toBeTruthy() }) })
  })
})

describe('Error if unrecognizable object', () => {
  it('should throw error if unrecognizable object', async () => {
    const megaverse = [['POLYANET', 'UFO'], ['POLYANET', 'POLYANET']]
    expect(() => megaverseService.parse(megaverse)).toThrow()
  })
})

describe('Valid all spaces', () => {
  it('all spaces should be valid', async () => {
    const megaverse = [[new Space(0, 0), new Space(0, 1)], [new Space(1, 0), new Space(1, 1)]]
    const result = megaverseService.validate(megaverse)
    expect(result).toBeTruthy()
  })
})

describe('Valid all spaces', () => {
  it('all spaces should be valid', async () => {
    const megaverse = [[new Space(0, 0), new Space(0, 1)], [new Space(1, 0), new Space(1, 1)]]
    const result = megaverseService.validate(megaverse)
    expect(result).toBeTruthy()
  })
})

describe('Valid polyanet between spaces', () => {
  it('Polyanet should be valid between spaces', async () => {
    const megaverse = [[new Space(0, 0), new Polyanet(0, 1)], [new Space(1, 0), new Space(1, 1)]]
    const result = megaverseService.validate(megaverse)
    expect(result).toBeTruthy()
  })
})
