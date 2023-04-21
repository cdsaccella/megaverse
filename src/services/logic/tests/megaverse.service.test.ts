import { AstralObjectEnum } from '../../../enums/astralobject.enum'
import { Cometh } from '../../../models/cometh'
import { Polyanet } from '../../../models/polyanet'
import { Soloon } from '../../../models/soloon'
import { Space } from '../../../models/space'
import { ComethService } from '../cometh.service'
import { MegaverseService } from '../megaverse.service'
import { PolyanetService } from '../polyanet.service'
import { SoloonService } from '../soloon.service'
import { SpaceService } from '../space.service'

let megaverseService: MegaverseService

beforeAll(() => {
  const megaverseConfig = {
    managers: new Map()
  }
  megaverseConfig.managers.set(AstralObjectEnum.Space, new SpaceService())
  megaverseConfig.managers.set(AstralObjectEnum.Polyanet, new PolyanetService())
  megaverseConfig.managers.set(AstralObjectEnum.Soloon, new SoloonService())
  megaverseConfig.managers.set(AstralObjectEnum.Cometh, new ComethService())
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

describe('Soloon with polyanet should be valid', () => {
  it('soloon with polyanet should be valid', async () => {
    const megaverse = [[new Space(0, 0), new Soloon(0, 1, 'red')], [new Space(1, 0), new Polyanet(1, 1)]]
    const result = megaverseService.validate(megaverse)
    expect(result).toBeTruthy()
  })
})

describe('Soloon without polyanet shouldnt be valid', () => {
  it('soloon without polyanet shouldnt be valid', async () => {
    const megaverse = [[new Space(0, 0), new Soloon(0, 1, 'red')], [new Space(1, 0), new Space(1, 1)]]
    expect(() => megaverseService.validate(megaverse)).toThrow()
  })
})

describe('Cometh without polyanet should be valid', () => {
  it('cometh without polyanet should be valid', async () => {
    const megaverse = [[new Space(0, 0), new Cometh(0, 1, 'up')], [new Space(1, 0), new Space(1, 1)]]
    const result = megaverseService.validate(megaverse)
    expect(result).toBeTruthy()
  })
})

describe('Cometh with polyanet shouldnt be valid', () => {
  it('cometh with polyanet shouldnt be valid', async () => {
    const megaverse = [[new Space(0, 0), new Cometh(0, 1, 'up')], [new Space(1, 0), new Polyanet(1, 1)]]
    expect(() => megaverseService.validate(megaverse)).toThrow()
  })
})
