<template>
  <li>
    <div class="col">
      {{ todo.task }}
    </div>
    <button
      v-on:click="$emit('delete-todo', todo)"
      class="btn btn-secondary"
    >
      Remove
    </button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",

  props: ['todo']
}
</script>

