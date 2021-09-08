import { useState } from "react"

const useCounter = (initialCounter = 0) => {
  const [counter, setCounter] = useState(initialCounter)

  const increment = ( factor = 1 ) => setCounter(counter => counter + factor)
  const decrement = ( factor = 1 ) => setCounter(counter => counter - factor)
  const reset = () => setCounter(initialCounter)

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}

export default useCounter;
