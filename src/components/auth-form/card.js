import React from 'react'
import styled from 'styled-components'


export const Card = styled.form.attrs({
  onSumbit: p => p.onSumbit,
}) `
  flex: 0 1 460px;
  background-color: #fff;
  box-shadow: 0px 1px 21px 0 #e0f0f4;
`
