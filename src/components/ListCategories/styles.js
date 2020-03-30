import styled, { css } from 'styled-components'
import { bounceDown } from '../../styles/animation'

export const SList = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;

  ${props =>
    props.fixed &&
    css`
      ${bounceDown({ pos: -20 })}
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
    `}
`

export const SItem = styled.ul`
  padding: 0 8px;
`
