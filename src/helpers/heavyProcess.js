const heavyProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('In Process....')
  }
  return `${iterations} iterations done`
}

export default heavyProcess