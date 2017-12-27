import { shallow } from 'vue-test-utils'
import ToDoConfirmButton from '@/components/ToDoConfirmButton'

describe('ToDoConfirmButton', () => {
  window.confirm = jest.fn()

  const message = 'foo'
  const onClick = jest.fn()

  const wrapper = shallow(ToDoConfirmButton, {
    propsData: {
      message,
      onClick
    }
  })

  it('`onClick` não deve ser chamada', () => {
    window.confirm.mockReturnValueOnce(false)
    wrapper.trigger('click')
    const { onClick } = wrapper.vm
    expect(onClick).not.toHaveBeenCalled()
  })

  it('`onClick` deve ser chamada somente uma vez', () => {
    window.confirm.mockReturnValueOnce(true)
    wrapper.trigger('click')
    const { onClick } = wrapper.vm
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
