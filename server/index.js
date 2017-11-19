import express from 'express'
import { indexHandler } from './handlers/indexHandler'


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.get('*', indexHandler)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})