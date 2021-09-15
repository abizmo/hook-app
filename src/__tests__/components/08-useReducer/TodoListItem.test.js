import { shallow } from 'enzyme'

import TodoListItem from "../../../components/08-useReducer/components/TodoListItem"
import demoTodos from '../../../fixtures/demoTodos'

const [todo] = demoTodos

describe('TodoListItem tests', () => {
  const handleDeleteTodo = jest.fn()
  const handleToggleTodo = jest.fn()

  const wrapper = shallow(
    <TodoListItem
      {...todo}
      onDeleteTodo={handleDeleteTodo}
      onToggleTodo={handleToggleTodo}
    />
  )

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should render the todo info', () => {
    expect(wrapper.find('span').text().trim()).toBe(todo.todo)
    expect(wrapper.find('span').hasClass('text-decoration-line-through')).toBeTruthy()
  })

  test('should call onDeleteTodo', () => {
    wrapper.find('button').simulate('click')
    expect(handleDeleteTodo).toHaveBeenCalledWith(todo.id)
  })
  
  test('should call onToggleTodo', () => {
    wrapper.find('input').simulate('change')
    expect(handleToggleTodo).toHaveBeenCalledWith(todo.id)
  })
})
