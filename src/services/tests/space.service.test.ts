import { Space } from '../../models/space'
import { SpaceService } from '../space.service'

let spaceService: SpaceService

beforeAll(() => {
  spaceService = new SpaceService()
})

describe('Parse Space', () => {
  it('should parse the the astral object as space', async () => {
    const value = 'SPACE'
    const result = spaceService.parse(0, 0, value)
    expect(result).toBeDefined()
    expect(result instanceof Space).toBeTruthy()
  })
})

describe('No parse Space', () => {
  it('shouldnt parse the astral object as space', async () => {
    const value = 'NOT_SPACE'
    const result = spaceService.parse(0, 0, value)
    expect(result).toBeUndefined()
  })
})
