import React from 'react'

import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'

const HookApp = () => {
  return (
    <div>
      <SimpleForm />
      <CounterWithCustomHook />
      <CounterApp />
    </div>
  )
}

export default HookApp
