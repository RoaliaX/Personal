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
    style="background-color: #151a21"
  >
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0 relative">
        <img
          :src="`https://cdn.discordapp.com/app-assets/${application_id}/${large_image}.png`"
          draggable="false"
          alt="Large image"
          class="rounded-xl h-28 w-28"
          width="128"
          height="128"
        /><img
          :src="`https://cdn.discordapp.com/app-assets/${application_id}/${small_image}.png`"
          draggable="false"
          alt="Small image"
          class="
            rounded-full
            absolute
            bg-gray-100 bg-opacity-20
            h-7
            w-7
            bottom-0
            right-0
          "
          width="16"
          height="16"
        />
      </div>
      <div class="overflow-x-hidden truncate space-y-px">
        <h1 class="font-semibold leading-tight text-lg truncate">
          {{ name }}
        </h1>
        <h2 class="opacity-90 leading-tight line-clamp-2">
          {{ details }}
        </h2>
        <h2 class="opacity-90 leading-tight line-clamp-2">{{ state }}</h2>
        <span class="opacity-90 leading-tight truncate">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    state: {
      type: String,
      required: true,
      default: "",
    },
    name: {
      type: String,
      required: true,
      default: "",
    },
    id: {
      type: String,
      required: true,
      default: "",
    },
    details: {
      type: String,
      required: true,
      default: "",
    },
    date: {
      type: String,
      required: true,
      default: "",
    },
    small_text: {
      type: String,
      required: true,
      default: "",
    },
    small_image: {
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
    application_id: {
      type: String,
      required: true,
      default: "",
    },
  },
});
</script>
