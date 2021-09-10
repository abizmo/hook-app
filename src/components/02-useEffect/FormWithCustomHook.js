import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {
  const [formState, handleInputChange] = useForm({
    email: '',
    name: '',
    password: '',
  })

  const { email, name, password } = formState;
  
  useEffect(() => {
    console.log('email')
  }, [email])

  return (
    <div className="div form-container">
      <h3>FormWithCustomHook</h3>
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
      <div className="input-group mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Tu password"
          value={ password }
          onChange={ handleInputChange }
        />
      </div>
    </div>
  )
}

export default FormWithCustomHook
