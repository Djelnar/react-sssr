import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Template } from './template'
import { Routes } from './routes'

export const indexServer = (req, res) => {
  const body = renderToString(
    <StaticRouter location={req.url} context={{}} >
      <Routes />
    </StaticRouter>    
  )
  res.send(Template({ body }))
}
