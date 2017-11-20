import express from 'express'
import { indexServer } from './index-server'


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.get('*', indexServer)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})