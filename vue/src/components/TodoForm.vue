<template>
  <div class="container add__todo__form">
    <div class="row">
      <div class="col-md-5">
        <h1>Add Todo Form</h1>
        <form v-on:submit.prevent="addTodo()">
          <input 
            type="text" 
            v-model="task" 
            class="form-control" 
            placeholder="try me out"
            autofocus
          >
          <button>Click me</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  
  data () {
    return {
      task: ""
    }
  },

  methods: {
    /**
     * Receives form data in order to create a todo and event up to
     * parent component
     * 
     * @returns void
     */
    addTodo() {
      const taskText = this.task.trim()
      if (taskText) {
        const newTodo = { 
          task: taskText, 
          id: Date.now() + (Math.floor(Math.random() * 1000000000000)),
          completed: false
        }

        // send todo object to parent component
        this.$emit('add-todo', newTodo)

        this.resetForm()
      }
    },

    /**
     * Clears the task input field
     * 
     * @returns void
     */
    resetForm() {
      this.task = ""
    }
  }
};
</script>