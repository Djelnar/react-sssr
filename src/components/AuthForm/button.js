import styled from 'styled-components'
import React from 'react'
import { Container } from './container'


const Btn = styled.button.attrs({
  type: p => p.type || 'button',
})`
  background-image: linear-gradient(to top, #48c7fb, #4ae5fb);
  font-family: Gotham;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  padding: 4vh 0;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow .2s ease;
  &:hover, &:active, &:focus {
    box-shadow: 0px 13px 29px 0 rgba(94, 216, 254, 0.6);
  }
`

const BtnWrapper = styled.div`
  background-color: #ffffff4d;
  box-shadow: inset 0px 2px 29px 0 rgba(135, 190, 202, 0.57);
  padding: 6vh 0;
`

export const Button = ({ children, type, onClick }) => ((
  <BtnWrapper>
    <Container>
      <Btn type={type} onClick={onClick} >{children}</Btn>
    </Container>
  </BtnWrapper>
))
