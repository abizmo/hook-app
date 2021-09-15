import { shallow } from 'enzyme'

import TodoAddForm from "../../../components/08-useReducer/components/TodoAddForm"

describe('TodoAddForm tests', () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(
    <TodoAddForm
      onAddTodo={handleAddTodo}
    />
  )

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('button').text().trim()).toBe('Add')
    expect(wrapper.find('input').exists()).toBeTruthy()
  })
  
  test('should no call onAddTodo when no input', () => {
    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    })

    expect(handleAddTodo).not.toHaveBeenCalled()
  })

  test('should call onAddTodo when input', () => {
    const value = 'Ir al super'
    wrapper.find('input').simulate('change', {
      target: {
        name: 'todo',
        value
      }
    })
    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    })

    expect(handleAddTodo).toHaveBeenCalledWith(value)
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
