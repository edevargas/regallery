import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { SList, SItem } from './styles'
import httpClient from '../../httpClient'

export const ListCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  const [error, setError] = useState('')

  /**
   * Get categories
   */
  useEffect(() => {
    if (categories.length === 0) fetchData()
  }, [])

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

  const fetchData = async () => {
    try {
      const response = await httpClient.get('categories', {})
      setCategories(response)
    } catch (error) {
      setError(error.message)
    }
  }

  const fillContent = fixed => {
    if (categories.length === 0 && !error) return 'Loading categories'
    if (error) return `Categories Error: ${error}`

    return (
      <SList className={fixed ? 'fixed' : ''}>
        {categories.map(category => (
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
