import { shallow } from 'enzyme'
import RealExampleRef from "../../../components/04-useRef/RealExampleRef"

describe('RealExampleRef tests', () => {
  const wrapper = shallow(<RealExampleRef />)

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MultiplesHooks').exists()).toBeFalsy()
  })
  
  test('should show MultiplesHooks when click in Show/Hide', () => {
    wrapper.find('button').simulate('click')

    expect(wrapper.find('MultiplesHooks').exists()).toBeTruthy()
  })
})
