<template>
  <div
    class="
      space-y-4
      overflow-x-hidden
      flex flex-col
      p-4
      bg-gray-100 bg-opacity-20
      shadow-lg
      rounded-lg
    "
    style="background-color: #1db954"
  >
    <a :href="`https://open.spotify.com/track/${sync_id}`">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0 relative">
          <img
            :src="`https://i.scdn.co/image/${large_image.slice(8)}`"
            draggable="false"
            alt="Large image"
            class="rounded-xl h-28 w-28"
            width="128"
            height="128"
          />
        </div>
        <div class="overflow-x-hidden truncate space-y-px">
          <h1 class="font-semibold leading-tight text-lg truncate">Spotify</h1>
          <h2 class="opacity-90 leading-tight line-clamp-2">
            by {{ details }}
          </h2>
          <h2 class="opacity-90 leading-tight line-clamp-2">on {{ state }}</h2>
          <h2 class="opacity-90 leading-tight line-clamp-2">
            {{ large_text }}
          </h2>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    details: {
      type: String,
      required: true,
      default: "",
    },
    sync_id: {
      type: String,
      required: true,
      default: "",
    },
    id: {
      type: String,
      required: true,
      default: "",
    },
    name: {
      type: String,
      required: true,
      default: "",
    },
    state: {
      type: String,
      required: true,
      default: "",
    },
    large_text: {
      type: String,
      required: true,
      default: "",
    },
    large_image: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    tolowercase(title) {
      return title.toLowerCase();
    },
  },
});
</script>
