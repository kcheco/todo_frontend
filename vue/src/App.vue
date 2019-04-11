<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo-form></todo-form>
    <div v-if="todos.length">
      {{ todos }}
    </div>
    <p v-else>
      Nothing to do.
    </p>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue';

export default {
  name: 'app',
  components: {
    TodoForm
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
    addToTodos(todo) {
      this.todos.push(todo)
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
