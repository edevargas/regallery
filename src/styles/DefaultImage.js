import React from 'react'

export const DefaultImage = props => {
  return (
    <svg width={200} height={200} {...props}>
      <path fill='#333333' d='M0 0h300v300H0z' />
    </svg>
  )
}
