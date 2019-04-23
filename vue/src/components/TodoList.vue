<template>
  <div class="container todo__list py-3">
    <div class="row">
      <div class="mx-auto col-md-8 col-lg-6 col-xl-5 p-3 bg-white rounded shadow-sm">
        <h1>{{ title }}</h1>
        <ul v-if="localTodos.length">
          <todo-item 
            v-for="todo in localTodos"
            v-bind:key="todo.id"
            v-bind:todo="todo"
            v-on:delete-todo="onDeleteTodo"
          />
        </ul>
        <p v-else>
          Nothing to do.
        </p>
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

  props: {
    title: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    },
    onDeleteTodo: {
      type: Function
    }
  },

  data() {
    return {
      localTodos: this.todos
    }
  },

  watch: {
    todos: function(val) {
      if (val !== this.localTodos) {
        this.localTodos = this.todos
      }
    }
  }
}
</script>

