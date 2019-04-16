<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo-form v-on:add-todo="addTodo($event)"></todo-form>
    <todo-list
      v-bind:todos="todos"
      v-bind:onDeleteTodo="deleteTodo"
      v-if="todos.length"
    />
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
