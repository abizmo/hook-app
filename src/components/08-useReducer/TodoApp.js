import React, { useEffect, useReducer } from 'react'

import TodoAddForm from './components/TodoAddForm'
import TodoList from './components/TodoList'
import todoReducer from './todoReducer'

import './styles.css'

const init = () => JSON.parse(localStorage.getItem('todos')) || []

const TodoApp = () => {
  const [todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (id) => dispatch({
    type: 'DELETE_TODO',
    payload: id
  })

  const handleToggle = (id) => dispatch({
    type: 'TOGGLE_TODO',
    payload: id
  })

  const handleSubmit = (todo) => {
    const newTodo = {
      id: new Date().getTime(),
      todo,
      done: false,     
    }

    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    })
  }

  return (
    <div className="container pt-3">
      <h3>TodoApp ({todos.length})</h3>
      <hr />
      <TodoAddForm onAddTodo={handleSubmit} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDelete}
        onToggleTodo={handleToggle}
      />
    </div>
  )
}

export default TodoApp
