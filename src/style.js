import { injectGlobal } from 'styled-components'
import './fonts/gotham-cyrillic'
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
  body {
    min-height: 100vh;
  }
`
