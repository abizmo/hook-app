import { act, renderHook } from '@testing-library/react-hooks'

import useForm from '../../hooks/useForm'

describe('useForm tests', () => {
  const initialState = {
    name: '',
    password: '',
  }
  
  test('should return default value equal to {}', () => {
    const { result } = renderHook(() => useForm())

    expect(result.current[0]).toStrictEqual({})
  })
  
  test('should return an array with initial values equals to props, and two functions', () => {
    const { result } = renderHook(() => useForm(initialState))

    expect(result.current[0]).toStrictEqual(initialState)
    expect(result.current[1]).toBeInstanceOf(Function)
    expect(result.current[2]).toBeInstanceOf(Function)
  })
  
  test('should modify input value', () => {
    const { result } = renderHook(() => useForm(initialState))
    const evt = { target: { 
      name: 'password',
      value: 'secret',
    }}
    act(() => result.current[1](evt))

    expect(result.current[0]).toStrictEqual({
      ...initialState,
      password: 'secret'
    })
  })
  
  test('should modify inputs to initial value', () => {
    const { result } = renderHook(() => useForm(initialState))
    const evt = { target: { 
      name: 'password',
      value: 'secret',
    }}
    act(() => {
      result.current[1](evt)
      result.current[2](evt)
    })

    expect(result.current[0]).toStrictEqual(initialState)
  })
})
