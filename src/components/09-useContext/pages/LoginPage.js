import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const LoginPage = () => {
  const { user, setUser } = useContext( UserContext )

  const handleLogin = () => {
    setUser({
      id: 123,
      name: 'abizmo',
      email: 'abizmo@abizmo.dev',
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        disabled={!!user.id}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage
