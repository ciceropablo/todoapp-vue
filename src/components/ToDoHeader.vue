<template>
  <header class="ToDoHeader">
    <h1 class="ToDoHeader__h1">ToDoApp-Vue</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'ToDoHeader'
}
</script>

<style scoped>
.ToDoHeader {
  margin: 0 10px;
}

.ToDoHeader__h1 {}
</style>
