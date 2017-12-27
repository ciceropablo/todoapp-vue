<template>
  <form class="ToDoForm" method="POST" @submit.prevent="handleSubmit">
    <input class="ToDoForm__input" type="text" v-model="toDoDescription">
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ToDoForm',
  data () {
    return {
      toDoDescription: '',
      toDoDone: false
    }
  },
  methods: {
    ...mapActions('ToDoList', {
      addToDo: 'add'
    }),
    handleSubmit () {
      const now = Date.now() + ''
      this.addToDo({
        id: now,
        name: `toDo-${now}`,
        description: this.toDoDescription,
        done: this.toDoDone
      })
      this.toDoDescription = ''
    }
  }
}
</script>

<style scoped>
.ToDoForm {
  padding: 0 5px;
  margin: 10px 0;
}

.ToDoForm__input {
  box-sizing: border-box;
  display: block;
  padding: 10px 5px;
  width: 100%;
}
</style>
