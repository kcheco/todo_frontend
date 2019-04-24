<template>
  <div class="form-group">
    <button
      :class="{'btn': true, 'btn-success': buttonStyle.success, 'btn-primary': buttonStyle.primary}">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BootstrapButton',

  props: {
    text: String,
    buttonStyle: Object
  }
}
</script>

