import React from 'react'

import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'
import MultiplesHooks from './components/03-examples/MultiplesHooks'

const HookApp = () => {
  return (
    <div>
      <MultiplesHooks />
      <FormWithCustomHook />
      <SimpleForm />
      <CounterWithCustomHook />
      <CounterApp />
    </div>
  )
}

export default HookApp
