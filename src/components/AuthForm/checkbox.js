import React, { Component } from 'react'
import styled from 'styled-components'


export const Link = styled.a.attrs({
  href: p => p.href,
})`
  font-family: Gotham;
  font-size: 12px;
  line-height: 2.55;
  letter-spacing: 0.1px;
  text-align: right;
  color: #798fa8;
  &:not(:hover) {
    text-decoration: none;
  }
`

const Label = styled.label`
  & span {
    font-family: Gotham;
    font-size: 12px;
    line-height: 2.55;
    letter-spacing: 0.1px;
    color: #798fa8;
  }
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & input[type='checkbox'] {
    display: none;
  }
  & .checkbox {
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: solid 1px rgba(193, 217, 222, 0.52);
    cursor: pointer;
    margin-right: 8px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.2s ease;
      background-color: #fff;
    }
  }
  & input[type='checkbox']:checked ~ .checkbox {
    &:after {
      background-color: #f54141;
      box-shadow: 0px 6px 16px 0 rgba(245, 65, 65, 0.49)
    }
  }
`

export const Checkbox = ({ onChange, defaultChecked, children }) => ((
  <Label>
    <input
      onChange={onChange}
      type='checkbox'
      defaultChecked={defaultChecked}
    />
    <div className='checkbox' />
    <span>{children}</span>
  </Label>
))
