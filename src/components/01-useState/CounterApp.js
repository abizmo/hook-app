import React, { useState } from 'react'

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  })

  const { counter1, counter2 } = state

  return (
    <div className="div counter-container">
      <h3>Counter1 {counter1}</h3>
      <h3>Counter2 {counter2}</h3>
      <hr />
      <button
        onClick={() => setState(state => ({
          ...state,
          counter1: state.counter1 + 1
        }))}
      >+1</button>
    </div>
  )
}

export default CounterApp
