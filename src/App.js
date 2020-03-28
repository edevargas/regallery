import React from 'react'
import { Home } from './pages/Home'
import { GlobalStyles } from './GlobalStyles'
import { Header } from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Home />
    </>
  )
}

export default App
