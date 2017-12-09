import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HelpLink = styled(Link).attrs({
  to: props => props.to,
}) `
  font-family: 'Gotham';
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.8px;
  max-width: 280px;
  display: block;
  margin: 0 auto;
  text-align: center;
  color: #00f;
  &:not(:hover) {
    text-decoration: none;s
  }
`
