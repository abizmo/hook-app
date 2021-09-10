import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {
  const [counter, setCounter] = useState(0)
  // const increment = () => setCounter(counter + 1)
  const incrementCallback = useCallback(
    () => {
      setCounter(c => c +1 )
    },
    [setCounter ],
  )

  return (
    <div className="div memo-container">
      <h3>useCallback hook: {counter}</h3>
      <hr />
      <ShowIncrement increment={incrementCallback} />
    </div>
  )
}

export default CallbackHook
