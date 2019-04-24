<template>
  <div class="container add__todo__form py-5">
    <div class="row">
      <div class="mx-auto col-md-8 col-lg-6 col-xl-5 p-3 bg-white rounded shadow-sm">
        <h1>Todo Form</h1>
        <form v-on:submit.prevent="addTodo()">
          <bootstrap-textfield
            fieldName="task"
            placeholderText="...what I like to do best is nothing"
            v-on:handle-input="onInput($event)"
            v-bind:input-data="task"
            v-bind:errors="errors"
          ></bootstrap-textfield>
          <bootstrap-button
            text="Create"
            v-bind:buttonStyle="buttonStyle"
          ></bootstrap-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BootstrapTextfield from './BootstrapTextfield.vue'
import BootstrapButton from './BootstrapButton.vue'

export default {
  name: "TodoForm",

  components: {
    BootstrapTextfield,
    BootstrapButton
  },
  
  data () {
    return {
      task: "",
      errors: {
        task: ""
      },
      buttonStyle: {
        success: true
      }
    }
  },

  methods: {
    onInput(e) {
      this.task = e.target.value
    },

    /**
     * Receives form data in order to create a todo and event up to
     * parent component
     * 
     * @returns void
     */
    addTodo() {
      const taskText = this.task.trim()
      if (taskText) {
        this.errors.task = ""

        const newTodo = { 
          task: taskText, 
          id: Date.now() + (Math.floor(Math.random() * 1000000000000)),
          completed: false
        }

        // send todo object to parent component
        this.$emit('add-todo', newTodo)

        this.resetForm()
      } else {
        this.errors.task = 'Task cannot be blank/empty.'
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