import { act, renderHook } from '@testing-library/react-hooks'
import useCounter from "../../hooks/useCounter"

describe('useCounter tests', () => {
  test('should return counter, increment, decrement and reset', () => {
    const { result: {current} } = renderHook(() => useCounter())
    
    expect(current.counter).toBe(0)
    expect(current.increment).toBeInstanceOf(Function)
    expect(current.decrement).toBeInstanceOf(Function)
    expect(current.reset).toBeInstanceOf(Function)
  })

  test('should accept a value as a prop', () => {
    const value = 19
    const { result: {current} } = renderHook(() => useCounter(value))
    
    expect(current.counter).toBe(value)
    expect(current.increment).toBeInstanceOf(Function)
    expect(current.decrement).toBeInstanceOf(Function)
    expect(current.reset).toBeInstanceOf(Function)
  })

  test('should increment with or without prop', () => {
    const { result } = renderHook(() => useCounter())

    act(() => result.current.increment())
    expect(result.current.counter).toBe(1)

    act(() => result.current.increment(8))
    expect(result.current.counter).toBe(9)
  })
  
  test('should decrement with or without prop', () => {
    const { result } = renderHook(() => useCounter(8))

    act(() => result.current.decrement())
    expect(result.current.counter).toBe(7)

    act(() => result.current.decrement(3))
    expect(result.current.counter).toBe(4)
  })
  
  test('should reset to default', () => {
    const { result } = renderHook(() => useCounter())

    act(() => result.current.increment(19))
    expect(result.current.counter).toBe(19)

    act(() => result.current.reset())
    expect(result.current.counter).toBe(0)

    const { result: resultWithProp } = renderHook(() => useCounter(19))

    act(() => resultWithProp.current.increment(10))
    expect(resultWithProp.current.counter).toBe(29)

    act(() => resultWithProp.current.reset())
    expect(resultWithProp.current.counter).toBe(19)
  })
  
})
