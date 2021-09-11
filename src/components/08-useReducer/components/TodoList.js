import React from 'react'
import PropTypes from 'prop-types'

import TodoListItem from './TodoListItem'

const TodoList = ({ onDeleteTodo, onToggleTodo, todos }) => (
  <ul className="list-group">
    {
      todos.map(({id, todo, done}) => (
        <TodoListItem
          key={id}
          done={done}
          id={id}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          todo={todo}
        />
      ))
    }
  </ul>
)

TodoList.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
  }))
}

export default TodoList
