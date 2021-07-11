<template>
  <a :href="link">
    <div
      style="
        height: 85px;
        width: 350px;
        background-color: #151a21;
        word-break: break-word;
      "
      class="
        rounded-lg
        cursor-pointer
        bg-opacity-40
        p-4
        transition-shadow
        hover:shadow-md
      "
    >
      <div class="flex space-x-3 text-white items-center">
        <span class="flex-grow space-x-3 truncate text-2xl"> {{ title }} </span>
      </div>
      <p class="text-white clamp-2">{{ description }}</p>
    </div>
  </a>
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
    description: {
      type: String,
      required: true,
      default: '',
    },
    link: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>
