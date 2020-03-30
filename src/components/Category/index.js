import React from 'react'
import { Anchor, Image, ImageWrapper } from './styles'
import DEFAULT_IMAGE from '../../../assets/gallery.svg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '' }) => {
  return (
    <div>
      <Anchor href={path}>
        <ImageWrapper>
          <Image
            src={cover}
            loading='lazy'
            alt='hola'
            isLoading={cover === DEFAULT_IMAGE ? 'true' : ' false'}
          />
        </ImageWrapper>
        {emoji}
      </Anchor>
    </div>
  )
}
