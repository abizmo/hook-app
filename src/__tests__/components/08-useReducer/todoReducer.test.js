import todoReducer from "../../../components/08-useReducer/todoReducer"
import demoTodos from '../../../fixtures/demoTodos'

describe('todosReducer tests', () => {
  test('should return the default state', () => {
    const state = todoReducer( undefined, {})

    expect(state).toEqual([])
  })

  test('should return the state in props', () => {
    const state = todoReducer(demoTodos, {})

    expect(state).toEqual(demoTodos)
  })

  test('should add a todo', () => {
    const newTodo = {
      id: 3,
      todo: 'Clonar a Dolly',
      done: false,
    }
    const action = {
      type: 'ADD_TODO',
      payload: newTodo,
    }
    const state = todoReducer(demoTodos, action)

    expect(state).toHaveLength(3)
    expect(state).toContainEqual(newTodo)
  })
  
  test('should delete a todo', () => {
    const todoId = 2
    const action = {
      type: 'DELETE_TODO',
      payload: todoId,
    }
    const state = todoReducer(demoTodos, action)

    expect(state).toHaveLength(1)
    expect(state.find(todo => todo.id === todoId)).toBeFalsy()
  })
  
  test('should toggle done key from a todo', () => {
    const todoId = 2
    const action = {
      type: 'TOGGLE_TODO',
      payload: todoId,
    }
    const state = todoReducer(demoTodos, action)

    expect(state).toHaveLength(2)
    expect(state.filter(todo => todo.done)).toHaveLength(1)
  })
  
  
})
