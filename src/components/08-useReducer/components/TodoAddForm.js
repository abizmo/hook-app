import React from 'react'
import PropTypes from 'prop-types'

import useForm from '../../../hooks/useForm'

const TodoAddForm = ({ onAddTodo }) => {
  const [ {todo}, handleTodoChange, reset ] = useForm({ todo: '' })

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (todo.trim().length > 1) {
      onAddTodo(todo)
      reset()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          onChange={handleTodoChange}
          value={todo}
          type="text"
          className="form-control"
          name="todo"
          placeholder="New Todo"
          aria-label="New Todo"
          aria-describedby="button-add"
        />
        <button
          className="btn btn-primary"
          type="submit"
          id="button-add"
        >Add</button>
      </div>
    </form>
  )
}

TodoAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default TodoAddForm
