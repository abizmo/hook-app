import React, { useState } from 'react'
import AppRouter from './components/AppRouter'
import UserContext from './context/UserContext'

const App = () => {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  )
}

export default App
