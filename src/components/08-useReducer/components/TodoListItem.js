import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({done, id, onDeleteTodo, onToggleTodo, todo}) => (
  <div key={id} className="input-group mb-3">
    <div className="input-group-text">
      <input
        aria-label="Checkbox to mark following todo"
        checked={done}
        className="form-check-input mt-0"
        onChange={() => onToggleTodo(id)}
        type="checkbox"
      />
    </div>
    <span
      className={`input-group-text bg-white flex-grow-1 ${done && 'text-decoration-line-through'}`}
    >{todo}</span>
    <button
      type="button"
      className="btn btn-outline-danger"
      onClick={() => onDeleteTodo(id)}
    >Borrar</button>
  </div>
)

TodoListItem.propTypes = {
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired,
}

export default TodoListItem
