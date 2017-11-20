import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { App } from './components/app'

export const Routes = (props) =>
  <Switch>
    <Route path='/' component={App} />
  </Switch>
