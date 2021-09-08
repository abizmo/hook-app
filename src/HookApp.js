import React from 'react'

import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
const HookApp = () => {
  return (
    <div>
      <CounterWithCustomHook />
      <CounterApp />
    </div>
  )
}

export default HookApp
