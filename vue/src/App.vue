<template>
  <div id="app">
    <navbar></navbar>
    <todo-form v-on:add-todo="addTodo($event)"></todo-form>
    <todo-list
      title="Todo List"
      v-bind:todos="pendingTodos"
      v-bind:onDeleteTodo="deleteTodo"
    />
    <todo-list
      v-if="completedTodos.length"
      title="Completed List"
      v-bind:todos="completedTodos"
      v-bind:onDeleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',

  components: {
    Navbar,
    TodoForm,
    TodoList
  },

  data() {
    return {
      todos: []
    }
  },

  computed: {
    /**
     * @property { Function } completedTodos gets a list of todos marked completed
     * @returns Array
     */
    completedTodos: {
      get: function() {
        return this.todos.filter( todo => todo.completed === true )
      }
    },

    /**
     * @property { Function } pendingTodos gets a list of todos not marked completed
     * @returns Array
     */
    pendingTodos: {
      get: function() {
        return this.todos.filter( todo => todo.completed === false )
      }
    }
  },

  methods: {
    /**
     * Adds a new todo to the existing todos array
     * 
     * @param { Object } todo is a an object that contains a task, id, completed
     * @returns void
     */
    addTodo(todo) {
      this.todos.push(todo)
    },

    /**
     * Removes a todo from existing todos array
     * 
     * @param { Object } todo is an object that contains a task, id, completed
     * @returns void
     */
    deleteTodo(todo) {
      // identify the index position of the todo
      const todoIndex = this.todos.indexOf(todo)

      // remove one item from the todos array based on position of todo received
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
  color: #2c3e50;
}
</style>
