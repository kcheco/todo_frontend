<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo-form v-on:add-todo="addTodo($event)"></todo-form>
    <div v-if="todos.length">
      <todo-list v-bind:todos="todos" v-on:delete-todo="deleteTodo"></todo-list>
    </div>
    <p v-else>
      Nothing to do.
    </p>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',

  components: {
    TodoForm,
    TodoList
  },

  props: {
    todos: {
      type: Array,
      default: function() {
        return []
      }
    }
  },

  methods: {
    addTodo(todo) {
      this.todos.push(todo)
    },

    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
