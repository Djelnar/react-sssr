import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'

/* eslint-disable no-undef */
hydrate(<BrowserRouter><Routes /></BrowserRouter>, document.querySelector('#root'))
