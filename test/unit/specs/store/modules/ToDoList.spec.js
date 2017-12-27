import { createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import ToDoList from '@/store/modules/ToDoList'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ToDoList', () => {
  const toDo = {
    id: '0123456789123',
    slug: 'toDo-0123456789123',
    description: 'foo',
    done: false
  }

  const store = new Vuex.Store({
    modules: {
      ToDoList
    }
  })

  it('`add` deve adicionar uma `toDo` a lista de `toDos`', () => {
    store.dispatch('ToDoList/add', toDo)

    const toDos = store.getters['ToDoList/toDos']
    const _toDo = toDos[0]

    expect(_toDo).toBe(toDo)
  })

  it('`update` deve atualizar uma `toDo` na lista de `toDos`', () => {
    const toDos = store.getters['ToDoList/toDos']
    const _toDo = toDos[0]
    _toDo.done = true

    store.dispatch('ToDoList/update', {
      id: _toDo.id,
      done: _toDo.done
    })

    const _toDos = store.getters['ToDoList/toDos']
    const __toDo = _toDos[0]

    expect(__toDo).toBe(_toDo)
  })

  it('`remove` deve remover uma `toDo` da lista de `toDos`', () => {
    const toDos = store.getters['ToDoList/toDos']
    const _toDo = toDos[0]

    store.dispatch('ToDoList/remove', _toDo.id)

    const _toDos = store.getters['ToDoList/toDos']
    expect(_toDos).toEqual([])
  })
})
