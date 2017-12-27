<template>
  <div class="ToDoPage">
    <ToDoHeader>
      <ToDoForm />
    </ToDoHeader>
    <ToDoList />
  </div>
</template>

<script>
import store from '@/store'
import ToDoHeader from './ToDoHeader'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

export default {
  name: 'ToDoPage',
  components: {
    ToDoHeader,
    ToDoForm,
    ToDoList
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('ToDoList/all')
    next()
  }
}
</script>

<style scoped>
.ToDoPage {
  margin: auto;
  max-width: 480px;
  width: 100%;
}
</style>
