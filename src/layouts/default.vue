<template>
  <div>
    <div class="min-h-screen">
      <Navbar />
      <div class="p-5">
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'Roxza',
  components: {
    Navbar,
    Footer,
  },
}
</script>
