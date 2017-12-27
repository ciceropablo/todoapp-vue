<template>
  <ul class="ToDoList">
    <li class="ToDoList__li" v-for="(toDo, key) in toDos" :key="key">
      <ToDoItem :toDo="toDo" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import ToDoItem from './ToDoItem'

export default {
  name: 'ToDoList',
  components: {
    ToDoItem
  },
  computed: {
    ...mapGetters('ToDoList', {
      toDos: 'toDos'
    })
  }
}
</script>

<style scoped>
.ToDoList {
  list-style: none;
  margin: 0 10px;
  padding: 0;
}

.ToDoList__li {
  margin-bottom: 10px;
  padding: 5px 5px;
}

.ToDoList__li:hover {
  background-color: #f8f8f8;
}
</style>
