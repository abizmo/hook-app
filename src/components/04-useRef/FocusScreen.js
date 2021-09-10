import React, { useRef } from 'react'

const FocusScreen = () => {
  const inputRef = useRef()

  return (
    <div className="div ref-container">
      <h3>Focus Screen</h3>
      <hr />
      <input
        ref={ inputRef }
        placeholder="Nombre"
        className="form-control mb-2"
      />
      <button
        className="btn btn-outline-primary"
        onClick={() => inputRef.current.select() }
      >Focus</button>
    </div>
  )
}

export default FocusScreen
