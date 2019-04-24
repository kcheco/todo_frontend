<template>
  <div :class="{'form-group': true, 'has-error': errors[fieldName] }">
    <input 
      type="text" 
      :name="fieldName"
      :placeholder="placeholderText"
      v-model="localInputData"
      v-on:input="$emit('handle-input', $event)"
      class="form-control" 
      autofocus
    >
    <div
      class="error-text"
      v-show="hasErrorFieldname(fieldName)">
      {{ errors[fieldName] }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BootstrapTextfield',

  props: {
    fieldName: {
      type: String,
      required: true
    },
    placeholderText: String,
    inputData: {
      type: String,
      required: true
    },
    errors: {
      type: Object
    }
  },

  data() {
    return {
      localInputData: this.inputData
    }
  },

  watch: {
    inputData: function(val) {
      if (val !== this.localInputData) {
        this.localInputData = this.inputData
      }
    }
  },

  computed: {
    /**
     * @property { Function } errorKeys gets an array of keys within the error object
     */
    errorKeys: {
      get: function() {
        return Object.keys(this.errors)
      }
    }
  },

  methods: {
    /**
     * checks if error object has the inputs name as one its indexes
     * 
     * @param { String } fieldName the name of the field being searched
     * @returns Boolean
     */
    hasErrorFieldname(fieldName) {
      return this.errorKeys.find( key => key === fieldName) ? true : false
    },
  }
}
</script>
