import React, { useMemo, useState } from 'react'

import heavyProcess from '../../helpers/heavyProcess'
import useCounter from '../../hooks/useCounter'

const MemoHook = () => {
  const [show, setShow] = useState(true)
  const {counter, increment} = useCounter(1);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

  return (
    <div className="div memo-container">
      <h3>MemoHook: <small>{counter}</small></h3>
      <hr />
      <p>{ memoHeavyProcess}</p>
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

export default MemoHook
