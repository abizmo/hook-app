import { useEffect, useRef, useState } from "react"

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [{ data, error, loading }, setState] = useState({
    data: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])
  
  useEffect(() => {
    setState({
      data: null,
      error: null,
      loading: true,
    })
    fetch(url)
      .then(res => res.json())
      .then(data => isMounted.current && setState({
        data,
        error: null,
        loading: false,
      }))
      .catch(error => isMounted.current && setState({
        data: null,
        error,
        loading: false,
      }));
  }, [url])

  return { data, error, loading }
}

export default useFetch