import express from 'express'
import { indexServer } from './index-server'


const app = express()
const PORT = 4200

app.use(express.static('public'))
app.get('*', indexServer)

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server running on ${PORT}`)
})
