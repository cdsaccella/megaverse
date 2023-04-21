import { MegaverseAPIRepository } from './repositories/megaverseApiRepository'
import { MegaverseConfig } from './services/logic/megaverse.service'
import { AstralObjectEnum } from './enums/astralobject.enum'
import { SpaceService } from './services/logic/space.service'
import { PolyanetService } from './services/logic/polyanet.service'
import { SoloonService } from './services/logic/soloon.service'
import { ComethService } from './services/logic/cometh.service'
import { MegaverseAPIService } from './services/apis/megaverseApi.service'

const managers = new Map()
managers.set(AstralObjectEnum.Space, new SpaceService())
managers.set(AstralObjectEnum.Polyanet, new PolyanetService())
managers.set(AstralObjectEnum.Soloon, new SoloonService())
managers.set(AstralObjectEnum.Cometh, new ComethService())
const megaverseApiService = new MegaverseAPIService()
const repository = new MegaverseAPIRepository(megaverseApiService)

const megaverseConfig: MegaverseConfig = {
  managers,
  repository
}

export default megaverseConfig
