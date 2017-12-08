import { injectGlobal } from 'styled-components'
import Regular from './GothaProReg.otf'
import RegularIta from './GothaProIta.otf'
import Bla from './GothaProBla.otf'
import BlaIta from './GothaProBlaIta.otf'

/* eslint-disable no-unused-expressions */

injectGlobal`
  @font-face {
    font-family: 'Gotham';
    src: url(${Regular});
    font-weight: normal;
  }
  @font-face {
    font-family: 'Gotham';
    src: url(${RegularIta});
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Gotham';
    src: url(${Bla});
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham';
    src: url(${BlaIta});
    font-weight: 900;
    font-style: italic;
  }
`
