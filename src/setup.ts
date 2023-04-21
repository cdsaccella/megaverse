import { MegaverseController } from './controllers/megaverseController'
// import { MegaverseService } from './services/logic/megaverse.service'
// import { AstralObjectEnum } from './enums/astralobject.enum'
// import { SpaceService } from './services/logic/space.service'
// import { PolyanetService } from './services/logic/polyanet.service'
// import { SoloonService } from './services/logic/soloon.service'
// import { ComethService } from './services/logic/cometh.service'
import { MegaverseAPIService } from './services/apis/megaverseApi.service'

// const megaverseConfig = {
//   managers: new Map()
// }
// megaverseConfig.managers.set(AstralObjectEnum.Space, new SpaceService())
// megaverseConfig.managers.set(AstralObjectEnum.Polyanet, new PolyanetService())
// megaverseConfig.managers.set(AstralObjectEnum.Soloon, new SoloonService())
// megaverseConfig.managers.set(AstralObjectEnum.Cometh, new ComethService())
// const megaverseService = new MegaverseService(megaverseConfig)
const megaverseApiService = new MegaverseAPIService()
const megaverseController = new MegaverseController(megaverseApiService)

export default megaverseController