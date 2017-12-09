import styled, { css } from 'styled-components'
import Username from './username.png'
import Password from './password.png'


export const Field = styled.label`
  background-color: #d4f1f9;
  display: block;
  width: 100%;
  padding: 20px;
  cursor: text;
  margin-bottom: 4vh;
  position: relative;
  /* &:after {
    content: '';
    width: 2px;
    height: 32px;
    background-color: #236874;
    position: absolute;
    top: 50%;
    right: 56px;
    transform: translate(0, -50%);
  } */
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 56px;
    border-left: 1px solid #2368744D;
    height: 32px;
    background-repeat: no-repeat;
    background-position: center center;
    ${props => props.username && css`
      background-image: url(${Username});
      background-size: 15px;

    `}
    ${props => props.password && css`
      background-image: url(${Password});
      background-size: 12px;
    `}
  }
  &:focus-within {
    box-shadow: inset 0px 1px 3px 0 rgba(159, 226, 245, 0.7);
  }
  & input {
    font-family: Gotham;
    font-size: 14px;
    line-height: 2.25;
    letter-spacing: 0.1px;
    text-align: left;
    color: #236874;
    display: block;
    width: 70%;
    &, &:focus, &:active {
      outline: none;
      border: none;
      background: transparent;
    }
  }
`
