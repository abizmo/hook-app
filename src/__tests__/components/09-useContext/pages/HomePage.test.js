import { mount } from 'enzyme'
import UserContext from '../../../../components/09-useContext/context/UserContext'
import HomePage from "../../../../components/09-useContext/pages/HomePage"

describe('HomePage tests', () => {
  const user = {
    name: 'Fernando',
    email: 'email@test.com'
  }
  const setUser = jest.fn()

  const wrapper = mount(
    <UserContext.Provider value={{user, setUser}}>
      <HomePage />
    </UserContext.Provider>
  )

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})
