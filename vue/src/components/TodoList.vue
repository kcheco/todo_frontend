<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <h1>Todo List</h1>
        <ul>
          <li
            v-for="todo in localTodos"
            v-bind:key="todo.id"
          >
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  props: ['todos'],

  data() {
    return {
      localTodos: this.todos
    }
  }
}
</script>

