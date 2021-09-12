import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const AboutPage = () => {
  const { user, setUser } = useContext(UserContext)

  const handleLogout = () => {
    setUser({})
  }

  return (
    <div>
      <h1>About Us</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
        className="btn btn-danger"
        disabled={!user.id}
        onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default AboutPage
