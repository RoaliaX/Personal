<template>
  <div class="container w-200 mx-auto">
    <div>
      <h1 class="text-2xl text-center float-left py-2 p-2">
        <i class="fad fa-stars"></i> Latest Posts
      </h1>
      <div class="pt-8">
        <div class="mt-4 items-center">
          <div class="py-4 grid grid-cols-3 grid-rows-1 gap-4">
            <template v-if="!latest.length == 0">
              <CardPost
                v-for="(latests, index) in latest"
                :key="index"
                :title="latests.title"
                :description="latests.description"
                :slug="latests.slug"
              />
            </template>
            <template v-else>
              <Warning title=" No posts found." />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 class="text-2xl text-center float-left py-2 p-2">
        <i class="fas fa-bolt"></i> Posts
      </h1>
      <div class="pt-8">
        <div class="mt-4 items-center">
          <div class="py-4 grid grid-cols-3 gap-4">
            <template v-if="!post.length == 0">
              <CardBlog
                v-for="(blogs, index) in post"
                :key="index"
                :title="blogs.title"
                :date="date(blogs.createdAt)"
                :read="blogs.read"
                :timer="blogs.timer"
                :slug="blogs.slug"
              />
            </template>
            <template v-else>
              <Warning title="No posts found." />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Blog',
  head() {
    return { title: 'Blog | Roxza' }
  },
  data() {
    return { latest: [], post: [] }
  },
  async fetch() {
    const latest = await this.$content('posts')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    let postlar = await this.$content('posts')
      .sortBy('createdAt', 'desc')
      .fetch()

    for (const bost of postlar) {
      const findFilter = (item) => item.slug === bost.slug
      if (latest.findIndex(findFilter) !== -1) {
        postlar = postlar.filter((item) => item.slug !== bost.slug)
      }
    }
    this.latest = latest
    this.post = postlar
  },
  methods: {
    date(slug) {
      return moment(this.post.created).format('DD.MM.YYYY')
    },
  },
}
</script>

<style>
.card-bg {
  background-color: #151a21;
}
.link {
  --tw-border-opacity: 0.75;
  border-color: rgba(107, 114, 128, var(--tw-border-opacity));
  border-bottom-width: 2px;
}
</style>
