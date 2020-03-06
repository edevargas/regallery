import React from 'react'
import { SImgWrapper, SImg, SButton } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const FeedCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <SImgWrapper className='FeedCard__img'>
          <SImg src={src} />
        </SImgWrapper>
        <SButton>
          <MdFavoriteBorder size='32px' />{likes} Likes!
        </SButton>
      </a>
    </article>
  )
}
