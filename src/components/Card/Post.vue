<template>
  <nuxt-link :to="`/blog/post/${slug}`">
    <div
      style="
        background-color: #151a21;
        height: 245px;
        width: 220px;
        word-break: break-word;
      "
      class="card-bg rounded-lg cursor-pointer bg-opacity-40 p-4 h-full"
    >
      <a>
        <img
          class="w-65 rounded"
          :src="require(`~/assets/images/posts/${slug}.png`)"
        />
        <div class="flex space-x-3 text-white">
          <span class="flex-grow space-x-3 font-bold truncate text-2xl py-2">
            {{ title }}
          </span>
        </div>
        <p class="text-gray-300 clamp-2">
          {{ description }}
        </p>
      </a>
    </div>
  </nuxt-link>
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
    slug: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>
