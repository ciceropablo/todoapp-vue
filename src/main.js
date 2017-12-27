// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import ToDoApp from './components/ToDoApp'

sync(store, router)

Vue.config.debug = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(ToDoApp)
})
