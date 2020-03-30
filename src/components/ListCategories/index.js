import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { SList, SItem } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, error, loading } = useCategoriesData()

  /**
   * Detect if scroll > 200
   */
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    // We create a listener for scroll event and we call onScroll method
    document.addEventListener('scroll', onScroll)

    // We need to kill the process listener on destroy
    return () => document.removeEventListener('scroll', onScroll)
  })

  const fillContent = fixed => {
    if (error) return `Categories Error: ${error}`

    return (
      <SList fixed={fixed}>
        {loading
          ? [1, 2, 3, 4, 5].map(num => (
            <SItem key={num}>
              <Category />
            </SItem>
          ))
          : categories.map(category => (
            <SItem key={category.id}>
              <Category {...category} />
            </SItem>
          ))}
      </SList>
    )
  }
  return (
    <>
      {fillContent()}
      {showFixed && fillContent(true)}
    </>
  )
}
