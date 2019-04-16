<template>
  <div class="container todo__list">
    <div class="row">
      <div class="col-md-5">
        <h1>Todo List</h1>
        <ul>
          <todo-item 
            v-for="todo in localTodos"
            v-bind:key="todo.id"
            v-bind:todo="todo"
            v-on:delete-todo="onDeleteTodo"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: "TodoList",

  components: {
    TodoItem
  },

  props: [
    'todos',
    'onDeleteTodo'
  ],

  data() {
    return {
      localTodos: this.todos
    }
  }
}
</script>

