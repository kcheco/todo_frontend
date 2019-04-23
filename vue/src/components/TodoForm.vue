<template>
  <div class="container add__todo__form py-5">
    <div class="row">
      <div class="mx-auto col-md-8 col-lg-6 col-xl-5 p-3 bg-white rounded shadow-sm">
        <h1>Todo Form</h1>
        <form v-on:submit.prevent="addTodo()">
          <div class="form-group">
            <input 
              type="text" 
              v-model="task" 
              class="form-control" 
              placeholder="...what I like to do best is nothing"
              autofocus
            >
          </div>
          <div class="form-group">
            <button class="btn btn-success">Create</button>
          </div>
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