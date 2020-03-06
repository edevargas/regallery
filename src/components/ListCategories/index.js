import React from 'react'
import { Category } from '../Category'
import { SList, SItem } from './styles'
import { categories } from '../../../api/db'

export const ListCategories = () => {
  return (
    <SList>
      {categories.map(category => (
        <SItem key={category.id}>
          <Category {...category} />
        </SItem>
      ))}
    </SList>
  )
}
