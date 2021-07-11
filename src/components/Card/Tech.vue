<template>
  <div
    style="background-color: #080808"
    class="
      hvr-grow-shadow
      rounded-md
      p-2
      px-3
      flex
      items-center
      justify-between
    "
  >
    <Dev :brand="tolowercase(title)" class="h-7 rounded" /> {{ title }}
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    tolowercase(title) {
      return title.toLowerCase()
    },
  },
})
</script>
