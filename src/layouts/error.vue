<template>
  <div class="container w-200 mx-auto text-center">
    <div v-if="error.statusCode === 404">
      <h1 class="text-3xl p-3">Page not found</h1>
      <h1 class="text-xl py-3">
        The page you requested may have been removed or is no longer available.
        You can return to the homepage if you wish.
      </h1>
      <br />
      <nuxt-link to="/"
        ><center>
          <div
            style="background-color: #151a21; width: 230px; font-size: 15px"
            class="hvr-grow-shadow rounded-md p-3 justify-between"
          >
            Home Page
          </div>
        </center>
      </nuxt-link>
      <br />
    </div>

    <div v-else>
      <h1 class="text-3xl p-3">An error occurred</h1>
      <h1 class="text-xl py-3">
        An error has occurred, please try again later.
      </h1>
      <br />
      <nuxt-link to="/"
        ><center>
          <div
            style="background-color: #151a21; width: 230px; font-size: 15px"
            class="hvr-grow-shadow rounded-md p-3 justify-between"
          >
            Home Page
          </div>
        </center>
      </nuxt-link>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'error',
}
</script>
