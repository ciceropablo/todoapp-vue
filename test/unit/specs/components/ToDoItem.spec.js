import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import ToDoItem from '@/components/ToDoItem'
import ToDoToggleButton from '@/components/ToDoToggleButton'
import ToDoConfirmButton from '@/components/ToDoConfirmButton'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ToDoItem', () => {
  window.confirm = jest.fn()

  const actions = {
    remove: jest.fn(),
    update: jest.fn()
  }

  const store = new Vuex.Store({
    modules: {
      ToDoList: {
        namespaced: true,
        actions
      }
    }
  })

  const wrapper = mount(ToDoItem, {
    localVue,
    store,
    propsData: {
      toDo: {
        id: '0123456789123',
        slug: 'toDo-0123456789123',
        description: 'foo',
        done: false
      }
    }
  })

  it('`toggleToDoDone` deve ser chamada somente uma vez', () => {
    const toggleToDoDone = jest.spyOn(wrapper.vm, 'toggleToDoDone')
    wrapper.update()
    wrapper.find(ToDoToggleButton).trigger('change')
    expect(toggleToDoDone).toHaveBeenCalledTimes(1)
  })

  it('`toggleToDoDone` deve retornar `true` dado argumento `false`', () => {
    expect(wrapper.vm.toggleToDoDone(false)).toBe(true)
  })

  it('`toggleToDoDone` deve retornar `false` dado argumento `true`', () => {
    expect(wrapper.vm.toggleToDoDone(true)).toBe(false)
  })

  it('`updateToDo` deve ser chamada somente uma vez', () => {
    actions.update.mockReset()
    wrapper.find(ToDoToggleButton).trigger('change')
    expect(actions.update).toHaveBeenCalledTimes(1)
  })

  it('`removeToDo` deve ser chamada somente uma vez', () => {
    window.confirm.mockReturnValueOnce(true)
    wrapper.find(ToDoConfirmButton).trigger('click')
    expect(actions.remove).toHaveBeenCalledTimes(1)
  })
})
