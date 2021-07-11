<template>
  <div class="w-200">
    <div
      class="h-13 text-white px-4 py-3 rounded relative w-full"
      role="alert"
      style="background-color: #c02828; text-align: center"
    >
      <span style="padding-right: 0.25rem" class="float-left block sm:inline">
        <i class="fad fa-exclamation-triangle"></i> {{ title }}</span
      >
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>
