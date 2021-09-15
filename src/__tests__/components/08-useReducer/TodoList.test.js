import { shallow } from 'enzyme'

import TodoList from "../../../components/08-useReducer/components/TodoList"
import todos from '../../../fixtures/demoTodos'


describe('TodoList tests', () => {
  const handleDeleteTodo = jest.fn()
  const handleToggleTodo = jest.fn()
  const wrapper = shallow(
    <TodoList
      onDeleteTodo={handleDeleteTodo}
      onToggleTodo={handleToggleTodo}
      todos={todos}
    />
  )

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('TodoListItem')).toHaveLength(todos.length)
    expect(typeof wrapper.find('TodoListItem').at(0).prop('onDeleteTodo')).toBe('function')
    expect(typeof wrapper.find('TodoListItem').at(0).prop('onToggleTodo')).toBe('function')
  })
})
