import styled, { css } from 'styled-components'
import { skeletonAnimation } from '../../styles/animation'

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
`
export const ImageWrapper = styled.div`
  object-fit: cover;
  width: 75px;
  height: 75px;
  overflow: hidden;
  border-radius: 50%;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  height: auto;
  text-indent: 100%;
  white-space: nowrap;
  width: 110px;
  &:before {
    display: none;
  }
  ${props =>
    props.isLoading === 'true' &&
    css`
      ${skeletonAnimation({ colorAnimation: '#333333' })}
      opacity: .3;
      top: -14px;
    `}
`
