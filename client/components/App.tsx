import { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient/welcome.ts'
import Charaters from './Characters.tsx'
import Books from './Books.tsx'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>{welcomeStatement}</h1>

      <Charaters />
      <Books />
    </>
  )
}

export default App
