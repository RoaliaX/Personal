<template>
  <nuxt-link :to="`/blog/post/${slug}`"
    ><div
      style="background-color: #151a21; word-break: break-word"
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
      <a>
        <div>
          <span class="text-xl clamp-1"> {{ title }}</span>
        </div>
        <span
          style="font-size: 14px; padding-top: 0.4rem; padding-bottom: 0.4rem"
          class="text-gray-300 p-1 float-right"
        >
          <i class="far fa-clock"></i> {{ date }}</span
        >
        <p style="font-size: 14px" class="p-1 text-gray-300">
          {{ readSet(read, timer) }}
        </p>
      </a>
    </div></nuxt-link
  >
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  methods: {
    readSet(read, timer) {
      return read + ' ' + timer + ' read'
    },
  },
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    date: {
      type: String,
      required: true,
      default: '',
    },
    read: {
      type: Number,
      required: true,
      default: '',
    },
    timer: {
      type: String,
      required: true,
      default: '',
    },
    slug: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>
