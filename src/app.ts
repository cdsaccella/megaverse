import express from 'express'

const app = express()

app.use(express.json())

app.get('/hello', (_, res) => {
  console.log('hi!')
  res.send('how are you?')
})

export default app;
