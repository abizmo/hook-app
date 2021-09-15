import { mount } from "enzyme"

import UserContext from "../../../../components/09-useContext/context/UserContext"
import AboutPage from "../../../../components/09-useContext/pages/AboutPage"

describe('AboutPage test', () => {
  const user = {
    id: 123,
    name: 'abizmo',
    email: 'abizmo@abizmo.dev',
  }
  const setUser = jest.fn()
  const wrapper = mount(
    <UserContext.Provider value={{user, setUser}}>
      <AboutPage />
    </UserContext.Provider>
  )

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('button').prop('disabled')).toBeFalsy()
  })

  test('should call setUser', () => {
    wrapper.find('button').prop('onClick')()

    expect(setUser).toHaveBeenCalledWith({})
  })
})
