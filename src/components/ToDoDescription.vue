<template>
  <label class="ToDoDescription" :for="labelFor">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'ToDoDescription',
  props: {
    labelFor: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.ToDoDescription {
  display: block;
  margin: 0 10px;
  overflow: hidden;
  width: 100%;
  word-wrap: break-word;
}
</style>
