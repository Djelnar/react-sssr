import styled, { css } from 'styled-components'


export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding-bottom: 4vh;
`

export const Icon = styled.a.attrs({
  href: p => p.href,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex: 0 0.000000001 25%;
  padding: 21px 0;
  transition: box-shadow .2s ease;
  cursor: pointer;
  & img.google {
    display: block;
    width: 18px;
    height: 18px;
  }
  ${props => props.facebook && css`
    background-image: linear-gradient(to top, #839aff, #839aff);
    &:hover {
      box-shadow: 0px 6px 16px 0 rgba(115, 141, 255, 0.49);
    }
  `}
  ${props => props.twitter && css`
    background-image: linear-gradient(to top, #4accf1, #4accf1);
    &:hover {
      box-shadow: 0px 6px 16px 0 rgba(74, 204, 241, 0.49);
    }
  `}
  ${props => props.google && css`
    background-image: linear-gradient(to top, #ff7e83, #ff7e83);
    &:hover {
      box-shadow: 0px 6px 16px 0 rgba(245, 65, 65, 0.49);
    }
  `}
`
