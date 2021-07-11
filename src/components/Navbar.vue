<template>
  <div>
    <nav class="w-full pt-4">
      <div class="container w-200 mx-auto">
        <div class="grid flex">
          <div
            style="font-size: 15px"
            class="space-x-2 text-left sm:items-center text-white"
          >
            <nuxt-link to="/" exact>Home</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/blog">Blog</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
.bg {
  --tw-bg-opacity: 1;
  background-color: #061221;
}
</style>
