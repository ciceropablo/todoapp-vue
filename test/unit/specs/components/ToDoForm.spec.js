import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import ToDoForm from '@/components/ToDoForm'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ToDoForm', () => {
  const actions = {
    add: jest.fn()
  }

  const store = new Vuex.Store({
    modules: {
      ToDoList: {
        namespaced: true,
        actions
      }
    }
  })

  const wrapper = shallow(ToDoForm, {
    localVue,
    store
  })

  it('`addToDo` deve ser chamada somente uma vez', () => {
    wrapper.trigger('submit')
    expect(actions.add).toHaveBeenCalledTimes(1)
  })

  it('`toDoDescription` deve ser um texto vazio', () => {
    const toDoDescription = 'bar'
    wrapper.setData({ toDoDescription })
    expect(wrapper.vm.toDoDescription).toBe(toDoDescription)

    wrapper.trigger('submit')
    expect(wrapper.vm.toDoDescription).toBe('')
  })
})
