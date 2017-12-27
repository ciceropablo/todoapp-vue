<template>
  <div class="ToDoApp">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ToDoApp'
}
</script>

<style>
html,
input,
button {
  color: #333;
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

<style scoped>
.ToDoApp {}
</style>
