import { shallow } from "enzyme"
import HookApp from "../HookApp"

describe('Hook App Tests', () => {
  test('should render and match to Snapshot', () => {
    const wrapper = shallow(<HookApp />)

    expect(wrapper).toMatchSnapshot();
  })
  
})
