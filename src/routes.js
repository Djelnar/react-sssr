import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { Index } from './pages/index'

/* eslint-disable no-unused-expressions */

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }
`

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Index} />
  </Switch>)
