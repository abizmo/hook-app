import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
  console.log('me volvi a llamara')
  return (
    <button className="btn btn-primary" onClick={() => increment() }>
      Increment
    </button>
  )
})

export default ShowIncrement
