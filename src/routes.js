import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Index } from './pages/index'
import { Auth } from './pages/auth'
import './style'

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Index} />
    <Route exact path='/auth' component={Auth} />
  </Switch>)
