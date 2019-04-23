<template>
  <li class="todo__item row mb-2 mx-0">
    <div class="col-1">
      <input 
        type="checkbox"
        v-model="todo.completed"
      >
    </div>
    <div class="col-8">
      {{ todo.task }}
    </div>
    <div class="col">
      <button
        v-on:click="$emit('delete-todo', todo)"
        class="btn btn-outline-secondary btn-sm"
      >
        Remove
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",

  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

