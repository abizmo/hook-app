import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [{ data, error, loading }, setState] = useState({
    data: null,
    error: null,
    loading: true,
  })
  
  useEffect(() => {
    setState({
      data: null,
      error: null,
      loading: true,
    })
    fetch(url)
      .then(res => res.json())
      .then(data => setState({
        data,
        error: null,
        loading: false,
      }))
      .catch(error => setState({
        data: null,
        error,
        loading: false,
      }));
  }, [url])

  return { data, error, loading }
}

export default useFetch