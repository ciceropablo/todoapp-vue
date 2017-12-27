<template>
  <input class="ToDoToggleButton" type="checkbox" :id="inputId" :checked="checked" @change="onChange">
</template>

<script>

export default {
  name: 'ToDoToggleButton',
  props: {
    inputId: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.ToDoToggleButton {
  display: block;
  height: 30px;
  margin: 0;
  width: 30px;
}
</style>
