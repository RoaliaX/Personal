<template>
  <div>
    <div v-if="type === 'status'">
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
            <div
              style="height: 128px; width: 128px"
              class="
                rounded-md
                float-left
                p-8
                bg-gray-500
                animate-pulse
                dark:bg-gray-700
              "
            />
          </div>
          <div class="overflow-x-hidden truncate space-y-px">
            <h1 class="font-semibold leading-tight text-lg truncate">
              <div
                class="
                  rounded-md
                  bg-gray-500
                  h-5
                  animate-pulse
                  w-45
                  dark:bg-gray-700
                "
              />
            </h1>
            <h2 class="opacity-90 leading-tight line-clamp-2">
              <div
                class="
                  rounded-md
                  bg-gray-500
                  h-5
                  animate-pulse
                  w-38
                  dark:bg-gray-700
                "
              />
            </h2>
            <h2 class="opacity-90 leading-tight line-clamp-2">
              <div
                class="
                  rounded-md
                  bg-gray-500
                  h-5
                  animate-pulse
                  w-59
                  dark:bg-gray-700
                "
              />
            </h2>
            <span class="opacity-90 leading-tight truncate">
              <div
                class="
                  rounded-md
                  bg-gray-500
                  h-5
                  animate-pulse
                  w-19
                  dark:bg-gray-700
                "
            /></span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="type === 'avatar'">
      <div
        style="height: 128px; width: 128px"
        class="
          rounded-full
          float-left
          p-8
          bg-gray-500
          animate-pulse
          dark:bg-gray-700
        "
      />
    </div>
    <div v-if="type === 'blog'">
      <div
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
            <span class="text-xl clamp-1">
              <div
                class="
                  rounded-md
                  bg-gray-500
                  h-5
                  animate-pulse
                  w-30
                  dark:bg-gray-700
                "
            /></span>
          </div>
          <span
            style="font-size: 14px; padding-top: 0.4rem; padding-bottom: 0.4rem"
            class="text-gray-300 p-1 float-right"
          >
            <div
              class="
                rounded-md
                bg-gray-500
                h-5
                animate-pulse
                w-20
                dark:bg-gray-700
              "
          /></span>
          <br />
          <div
            class="
              p-2
              rounded-md
              bg-gray-500
              h-5
              animate-pulse
              w-20
              dark:bg-gray-700
            "
          />
        </a>
      </div>
    </div>
    <div v-if="type === 'post'">
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
          <div
            class="
              rounded-md
              bg-gray-500
              h-5
              animate-pulse
              w-55
              dark:bg-gray-700
              py-16
            "
          />
          <br />
          <div class="flex space-x-3 text-white">
            <span class="flex-grow space-x-3 font-bold truncate text-2xl py-2">
              <div
                class="
                  rounded-md
                  bg-gray-500
                  h-5
                  animate-pulse
                  w-2/3
                  dark:bg-gray-700
                "
              />
            </span>
          </div>
          <div
            class="
              rounded-md
              bg-gray-500
              h-5
              animate-pulse
              w-45
              dark:bg-gray-700
              py-6
            "
          />
        </a>
      </div>
    </div>
    <div
      v-if="type === 'repository'"
      class="
        rounded-lg
        cursor-pointer
        bg-opacity-40
        p-4
        transition-shadow
        hover:shadow-md
        h-full
      "
      style="height: 85px; background-color: #151a21; word-break: break-word"
    >
      <div class="flex space-x-3 text-white items-center">
        <span class="flex-grow space-x-3 truncate text-2xl">
          <div
            class="
              rounded-md
              bg-gray-500
              h-5
              animate-pulse
              w-2/12
              dark:bg-gray-700
            "
          />
        </span>
      </div>
      <br />
      <div
        class="rounded-md bg-gray-500 h-5 animate-pulse w-65 dark:bg-gray-700"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: "block",
    },
    iframeUrl: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      itemLoaded: false,
    };
  },
});
</script>
