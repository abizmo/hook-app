import { mount } from "enzyme"
import AppRouter from "../../../../components/09-useContext/components/AppRouter"
import UserContext from "../../../../components/09-useContext/context/UserContext"

describe('AppRouter tests', () => {
  test('should render and match snapshot', () => {
    const user = {}
    const wrapper = mount(
      <UserContext.Provider value={user}>
        <AppRouter />
      </UserContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
