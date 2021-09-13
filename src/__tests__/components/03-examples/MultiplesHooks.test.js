import { shallow } from 'enzyme'
import MultiplesHooks from "../../../components/03-examples/MultiplesHooks"
import useCounter from '../../../hooks/useCounter'
import useFetch from '../../../hooks/useFetch'
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('MultiplesHooks test', () => {
  let useCounterResult;
  beforeEach(() => {
    useCounterResult = useCounter.mockReturnValue({
      counter: 1,
      increment: jest.fn()
    })
  })

  test('should render and match snapshot', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })

    const wrapper = shallow(<MultiplesHooks />)

    expect(wrapper).toMatchSnapshot()
  })
  
  test('should show the info from the api', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Fernando',
        quote: 'Hola Mundo',
      }],
      loading: false,
      error: null,
    })
    const wrapper = shallow(<MultiplesHooks />)

    expect(wrapper.find('.alert').exists()).toBeFalsy()
    expect(wrapper.find('p.mb-2').text().trim()).toBe('Hola Mundo')
    expect(wrapper.find('footer').text().trim()).toBe('Fernando')
  })
  
  test('should call increment when click on next button', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Fernando',
        quote: 'Hola Mundo',
      }],
      loading: false,
      error: null,
    })
    const wrapper = shallow(<MultiplesHooks />)
    const nextBtn = wrapper.find('.btn')

    nextBtn.simulate('click')
    expect(useCounterResult).toHaveBeenCalled()
    expect(nextBtn.text().trim()).toBe('Next')
  })
})
