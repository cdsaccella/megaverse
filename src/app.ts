import express from 'express'
import { MegaverseRoutes } from './routes/megaverseRoutes'
import { MegaverseController } from './controllers/megaverseController'
import megaverseConfig from './setup'

const app = express()

const megaverseController = new MegaverseController(megaverseConfig)

app.use(express.json())

app.get('/hello', (_, res) => {
  console.log('hi!')
  res.send('how are you?')
})

app.use('/megaverse/', new MegaverseRoutes(megaverseController).getRoutes())

export default app
