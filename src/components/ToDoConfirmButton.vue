<template>
  <button class="ToDoConfirmButton" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ToDoConfirmButton',
  props: {
    message: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick () {
      if (confirm(this.message)) {
        this.onClick()
      }
    }
  }
}
</script>

<style scoped>
.ToDoConfirmButton {}
</style>
