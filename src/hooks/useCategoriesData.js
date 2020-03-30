import { useState, useEffect } from 'react'
import httpClient from '../httpClient'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  /**
   * Get categories
   */
  useEffect(() => {
    if (categories.length === 0) fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await httpClient.get('categories', {})
      setLoading(false)
      setCategories(response)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return { categories, error, loading }
}
