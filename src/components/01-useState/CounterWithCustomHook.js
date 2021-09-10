import React from 'react'
import useCounter from '../../hooks/useCounter'

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(7);

  return (
    <div className="div counter-container">
      <h3>Counter with hook: {counter}</h3>
      <hr />
      <button onClick={() => increment(2)} className="btn">+1</button>
      <button onClick={() => decrement(3)} className="btn">-1</button>
      <button onClick={reset} className="btn">reset</button>
    </div>
  )
}

export default CounterWithCustomHook
