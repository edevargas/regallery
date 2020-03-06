import React from 'react'
import { FeedCard } from '../FeedCard'

function ListFeedCard () {
  const fillContent = () => {
    return (<ul>
      {[1, 2, 3, 4].map(id => <FeedCard key={id} />)}
            </ul>)
  }

  return (
    fillContent()
  )
}

export default ListFeedCard
