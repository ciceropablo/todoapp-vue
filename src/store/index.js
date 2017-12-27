import Vue from 'vue'
import Vuex from 'vuex'
import ToDoList from './modules/ToDoList'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  getters: {},

  state: {},

  mutations: {},

  actions: {},

  modules: {
    ToDoList
  }
})
