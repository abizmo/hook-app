import { renderHook } from '@testing-library/react-hooks'

import useFetch from "../../hooks/useFetch"

describe('useFetch tests', () => {
  const url = 'https://www.breakingbadapi.com/api/quotes/1'

  test('should return the default values', () => {
    const { result } = renderHook(() => useFetch(url))

    expect(result.current.data).toBe(null)
    expect(result.current.loading).toBeTruthy()
    expect(result.current.error).toBe(null)
  })
  
  test('should return the fetch response', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url))
    
    await waitForNextUpdate({timeout: false})
    expect(result.current.data).toHaveLength(1)
    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBe(null)
  })
  
  test('should handle the error', async() => {
    const url = 'https://www.breakingbadapi.com/api/qu/1'
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url))
    
    await waitForNextUpdate({timeout: false})
    expect(result.current.data).toBe(null)
    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).not.toBe(null)
  })
})
