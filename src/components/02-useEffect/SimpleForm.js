import React, { useEffect, useState } from 'react'

import Message from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })
  const { name, email } = formState;

  useEffect(() => {
    console.log('hey')
  }, [])

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    })

  }

  return (
    <div className="div form-container">
      <h3>useEffect</h3>
      <hr />

      <div className="input-group mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { name.length === 4 && <Message />}
    </div>
  )
}

export default SimpleForm
