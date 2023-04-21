import express from 'express'

const app = express()

app.use(express.json())
const PORT = 3000

app.get('/hello', (_, res) => {
  console.log('hi!')
  res.send('how are you?')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
