<template>
  <div class="ToDoItem" :class="{ 'ToDoItem--isDone': toDoDone }">
    <ToDoToggleButton
      :inputId.sync="toDoName"
      :checked.sync="toDoDone"
      :onChange.sync="handleToggle"
    />

    <ToDoDescription
      :labelFor.sync="toDoName">
        {{ toDoDescription }}
    </ToDoDescription>

    <ToDoConfirmButton
      message="Are you sure?"
      :onClick.sync="handleConfirmation">
        &#10005;
    </ToDoConfirmButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ToDoToggleButton from './ToDoToggleButton'
import ToDoDescription from './ToDoDescription'
import ToDoConfirmButton from './ToDoConfirmButton'

export default {
  name: 'ToDoItem',
  props: {
    toDo: {
      type: Object,
      required: true
    }
  },
  components: {
    ToDoToggleButton,
    ToDoDescription,
    ToDoConfirmButton
  },
  computed: {
    toDoId () {
      return this.toDo.id
    },
    toDoName () {
      return this.toDo.name
    },
    toDoDescription () {
      return this.toDo.description
    },
    toDoDone () {
      return this.toDo.done
    }
  },
  methods: {
    ...mapActions('ToDoList', {
      updateToDo: 'update',
      removeToDo: 'remove'
    }),
    toggleToDoDone (value) {
      return !value
    },
    handleToggle () {
      const id = this.toDoId
      const done = this.toggleToDoDone(this.toDoDone)
      this.updateToDo({ id, done })
    },
    handleConfirmation () {
      const id = this.toDoId
      this.removeToDo(id)
    }
  }
}
</script>

<style scoped>
.ToDoItem {
  align-items: center;
  display: flex;
}

.ToDoItem--isDone > .ToDoDescription {
  text-decoration: line-through;
}
</style>
