<template>
  <a :href="github(owner, title)">
    <div
      style="height: 85px; background-color: #151a21; word-break: break-word"
      class="
        rounded-lg
        cursor-pointer
        bg-opacity-40
        p-4
        transition-shadow
        hover:shadow-md
        h-full
      "
    >
      <div class="flex space-x-3 text-white items-center">
        <span class="flex-grow space-x-3 truncate text-2xl"> {{ title }} </span>
        <p class="float-right text-gray-400">
          <Dev :brand="tolowercase(language)" class="h-7 rounded" />
        </p>
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
    owner: {
      type: String,
      required: true,
      default: '',
    },
    language: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    tolowercase(title) {
      return title.toLowerCase()
    },

    github(owner, name) {
      return 'https://github.com/' + owner + '/' + name
    },
  },
})
</script>
