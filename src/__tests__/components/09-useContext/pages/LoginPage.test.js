import {mount} from 'enzyme'
import UserContext from "../../../../components/09-useContext/context/UserContext"
import LoginPage from "../../../../components/09-useContext/pages/LoginPage"

describe('LoginPage tests', () => {
  const user = {}
  const setUser = jest.fn()
  const wrapper = mount(
    <UserContext.Provider value={{user, setUser}}>
      <LoginPage />
    </UserContext.Provider>
  )

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  test('should call setUser', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.find('button').prop('disabled')).toBeFalsy()
    expect(setUser).toHaveBeenCalled()
  })
})
