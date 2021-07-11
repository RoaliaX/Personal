<template>
  <img :src="require(`~/assets/images/dev/${brand}.svg`)" />
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    brand: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>
