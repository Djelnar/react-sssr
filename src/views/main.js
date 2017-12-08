import React from 'react'
import styled from 'styled-components'
import bgImage from './bg.png'


const Background = styled.div`
  background-image: url(${bgImage});
  background-position: center top;
  background-size: cover;
  min-height: 100vh;
`

export const Main = ({ children }) => (
  <Background>
    {children}
  </Background>
)
