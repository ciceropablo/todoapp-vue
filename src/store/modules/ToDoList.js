import * as ls from '@/local-storage'
import * as types from '@/store/mutation-types'

export default {
  namespaced: true,

  getters: {
    toDos: state => state.toDos
  },

  state: {
    toDos: []
  },

  mutations: {
    [types.UPDATE_TODOS] (state, { toDos }) {
      state.toDos = toDos
    },

    [types.ADD_TODO] (state, { toDo }) {
      state.toDos.push(toDo)
    },

    [types.REMOVE_TODO] (state, { id }) {
      state.toDos = state.toDos.filter(toDo => toDo.id !== id)
    },

    [types.UPDATE_TODO] (state, { id, done }) {
      const toDo = state.toDos.find(toDo => toDo.id === id)
      toDo.done = done
    }
  },

  actions: {
    all: ({ commit }) => {
      const toDos = ls.getToDos(ls.key)
      commit(types.UPDATE_TODOS, { toDos })
    },

    saveAll: ({ commit }, toDos) => {
      ls.saveToDos(ls.key, toDos)
    },

    add: ({ dispatch, commit, state }, toDo) => {
      commit(types.ADD_TODO, { toDo })
      dispatch('saveAll', state.toDos)
    },

    remove: ({ dispatch, commit, state }, id) => {
      commit(types.REMOVE_TODO, { id })
      dispatch('saveAll', state.toDos)
    },

    update: ({ dispatch, commit, state }, { id, done }) => {
      commit(types.UPDATE_TODO, { id, done })
      dispatch('saveAll', state.toDos)
    }
  }
}
