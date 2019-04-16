<template>
  <li class="todo__item">
    <div class="col">
      <div class="form-check">
        <input 
          type="checkbox"
          class="form-check-input"
          v-model="todo.completed"
        >
      </div>
    </div>
    <div class="col">
      {{ todo.task }}
    </div>
    <div class="col">
      <button
        v-on:click="$emit('delete-todo', todo)"
        class="btn btn-secondary"
      >
        Remove
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",

  props: ['todo']
}
</script>

