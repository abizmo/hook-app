import React from 'react'

import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

import './custom-hooks.css'

const MultiplesHooks = () => {
  const {counter, increment} = useCounter(1);
  const { data, loading, } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { author, quote } = !!data && data[0]

  return (
    <div className="hooks-container">
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {
        loading
        ? (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        )
        : (
          <blockquote className="blockquote text-end">
            <p className="mb-2">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )
      }
      <button
        onClick={() => increment() }
        className="btn btn-primary"
      >
        Next
      </button>
    </div>
  )
}

export default MultiplesHooks
