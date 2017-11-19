import React from 'react'
import { renderToString } from 'react-dom/server'
// import { StaticRouter } from 'react-router-dom'

// import Routes from '../../src/Routes/Routes'
import { Index } from '../views'

export const indexHandler = (req, res) => {
  const body = renderToString(
    'хуй'
  )
  res.send(Index({ body }))
}


