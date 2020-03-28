import React from 'react'
import { Logo } from '../Logo'
import { SHeaderContainer, SLogoWrapper } from './styles'

export const Header = () => {
  return (
    <SHeaderContainer>
      <SLogoWrapper>
        <Logo />
      </SLogoWrapper>
    </SHeaderContainer>
  )
}
