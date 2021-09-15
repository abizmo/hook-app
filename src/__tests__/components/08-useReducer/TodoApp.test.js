import { mount, shallow } from 'enzyme'
import { act } from '@testing-library/react'

import TodoApp from "../../../components/08-useReducer/TodoApp"
import demoTodos from '../../../fixtures/demoTodos'

describe('TodoApp tests', () => {
  const wrapper = shallow(<TodoApp />)

  Storage.prototype.setItem = jest.fn()

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should add a Todo', () => {
    const wrapper = mount(<TodoApp />)

    act( () => {
      wrapper.find('TodoAddForm').prop('onAddTodo')(demoTodos[0].todo)
      wrapper.find('TodoAddForm').prop('onAddTodo')(demoTodos[1].todo)
    })

    expect(wrapper.find('h3').text().trim()).toBe('TodoApp (2)')
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
  })

})
