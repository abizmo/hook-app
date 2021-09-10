import React, { useState } from 'react'

import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'
import MultiplesHooks from './components/03-examples/MultiplesHooks'
import FocusScreen from './components/04-useRef/FocusScreen'
import RealExampleRef from './components/04-useRef/RealExampleRef'
import Layout from './components/05-useLayoutEffect/Layout'
import CallbackHook from './components/06-memos/CallbackHook'
// import MemoHook from './components/06-memos/MemoHook'
import Memorize from './components/06-memos/Memorize'
import { Padre } from './components/07-tarea-memo/Padre'

import './styles.css'

const HookApp = () => {
  const [showTarea, setShowTarea] = useState(false)
  return (
    <>
      <button
        className="btn btn-secondary"
        onClick={() => setShowTarea(!showTarea)}
      >ToggleTarea</button>
      {
        showTarea
        ? <Padre />
        : (
          <div>
            <CallbackHook />
            {/* <MemoHook /> */}
            <Memorize />
            <Layout />
            <RealExampleRef />
            <FocusScreen />
            <MultiplesHooks />
            <FormWithCustomHook />
            <SimpleForm />
            <CounterWithCustomHook />
            <CounterApp />
          </div>
        )
      }
    </>
  )
}

export default HookApp
