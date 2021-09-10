import React, { useLayoutEffect, useRef, useState } from 'react'

import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const Layout = () => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({})
  const {counter, increment} = useCounter(1);
  const { data, } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { quote } = !!data && data[0]

  useLayoutEffect(() => {
    setBoxSize(pRef.current.getBoundingClientRect())
  }, [quote])

  return (
    <div className="div layout-container">
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-end">
        <p
          ref={ pRef }
          className="mb-2"
        >{quote}</p>
      </blockquote>
      <button
        onClick={() => increment() }
        className="btn btn-primary"
      >
        Next
      </button>
      <pre>
        { JSON.stringify( boxSize, null, 3 ) }
      </pre>
    </div>
  )
}

export default Layout
