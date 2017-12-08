import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'


const reducer = (state = {}, action) => state

const store = createStore(reducer)

/* eslint-disable no-undef */

hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>), document.querySelector('#root'))
