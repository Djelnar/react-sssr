import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Template } from './template'
import { Routes } from './routes'


export const indexServer = (req, res) => {
  const reducer = (state = {}, action) => state
  const store = createStore(reducer)
  const preloadedState = store.getState()
  const body = renderToString((
    <Provider store={store} >
      <StaticRouter location={req.url} context={{}} >
        <Routes />
      </StaticRouter>
    </Provider>))

  res.send(Template({ body, preloadedState }))
}
