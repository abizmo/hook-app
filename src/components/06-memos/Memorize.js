import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small';

const Memorize = () => {
  const [show, setShow] = useState(true)
  const {counter, increment} = useCounter();

  return (
    <div className="div memo-container">
      <h3>Memorize <Small value={counter} /></h3>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => increment()}
      >Increment</button>
      <button
        className="btn btn-outline-primary ml-1"
        onClick={() => setShow(!show)}
      >Show/Hide {JSON.stringify(show)}</button>
    </div>
  )
}

export default Memorize
