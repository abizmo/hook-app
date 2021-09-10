import React from 'react'

import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'
import MultiplesHooks from './components/03-examples/MultiplesHooks'
import FocusScreen from './components/04-useRef/FocusScreen'
import RealExampleRef from './components/04-useRef/RealExampleRef'

import './styles.css'

const HookApp = () => {
  return (
    <>
      <RealExampleRef />
      <FocusScreen />
      <MultiplesHooks />
      <FormWithCustomHook />
      <SimpleForm />
      <CounterWithCustomHook />
      <CounterApp />
    </>
  )
}

export default HookApp
