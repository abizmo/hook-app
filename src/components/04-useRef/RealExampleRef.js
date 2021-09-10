import React, { useState } from 'react'
import MultiplesHooks from '../03-examples/MultiplesHooks'

const RealExampleRef = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="div ref-container">
      <h3>RealExampleRef</h3>
      <hr />
      { show && <MultiplesHooks /> }
      <button
        className="btn btn-primary"
        onClick={() => setShow(!show)}
      >Show/Hide</button>
    </div>
  )
}

export default RealExampleRef
