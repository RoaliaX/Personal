<template>
  <div class="container w-200 mx-auto">
    <div class="py-8">
      <div v-if="$fetchState.pending">
        <center>
          <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
          <br />
          <h1 class="text-xl">Yükleniyor...</h1>
        </center>
      </div>
      <div class="text-center" v-else-if="$fetchState.error">
        <h1 class="text-3xl p-3">Page not found</h1>
        <h1 class="text-xl py-3">
          The page you requested may have been removed or is no longer
          available. You can return to the homepage if you wish.
        </h1>
        <br />
        <nuxt-link to="/blog"
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
        <div
          class="
            float-right
            w-60
            grid grid-flow-col grid-cols-2 grid-rows-1
            gap-4
          "
        >
          <div
            style="background-color: #151a21; width: 120px"
            class="rounded-md p-2 px-3 flex items-center justify-between"
          >
            {{ post.read }} {{ post.timer }} read
          </div>
          <div
            style="background-color: #151a21; width: 125px"
            class="rounded-md p-2 px-3 flex items-center justify-between"
          >
            <p><i class="far fa-clock"></i> {{ date(post.createdAt) }}</p>
          </div>
        </div>
        <div class="divide-y divide-gray-500">
          <div id="title">
            <br />
            <h1 class="text-3xl">{{ post.title }}</h1>
            <h1 style="font-size: 15px">
              {{ post.description }}
            </h1>
            <br />
          </div>
          <div id="read">
            <br />
            <h1 style="font-size: 15px">
              <nuxt-content :document="post" />
            </h1>

            <br />

            <div id="twitter">
              <a
                target="_blank"
                :href="
                  sharePlatform(
                    'twitter',
                    post.title + '%20https://roxza.xyz/blog/post/' + post.slug
                  )
                "
              >
                <div class="share-platform" style="background-color: #1da1f2">
                  <h1 class="share-text">
                    <i style="font-size: 1.75em" class="fab fa-twitter" />
                  </h1>
                </div>
              </a>
            </div>

            <div id="whatsapp">
              <a
                target="_blank"
                :href="
                  sharePlatform(
                    'whatsapp',
                    post.title + '%20https://roxza.xyz/blog/post/' + post.slug
                  )
                "
              >
                <div class="share-platform" style="background-color: #128c7e">
                  <h1 class="share-text">
                    <i style="font-size: 1.75em" class="fab fa-whatsapp"></i>
                  </h1>
                </div>
              </a>
            </div>

            <div id="telegram">
              <a
                target="_blank"
                :href="
                  sharePlatform(
                    'telegram',
                    post.title + '%20https://roxza.xyz/blog/post/' + post.slug,
                    'https://roxza.xyz/blog/post/' + post.slug
                  )
                "
              >
                <div class="share-platform" style="background-color: #0088cc">
                  <h1 class="share-text">
                    <i style="font-size: 1.75em" class="fab fa-telegram"></i>
                  </h1>
                </div>
              </a>
            </div>

            <div
              style="background-color: #151a21; width: 190px"
              class="
                float-right
                rounded-md
                p-2
                px-5
                flex
                items-center
                justify-between
              "
            >
              <nuxt-link to="/blog">
                <i class="fas fa-arrow-left"></i> Back to blog list
              </nuxt-link>
            </div>

            <br />
            <br />
          </div>
          <br />
          <div id="message">
            <br />
            <Disqus
              :title="post.title"
              :url="`https://roxza.xyz/post/${slug}`"
              :identifier="`/post/${slug}`"
              :slug="slug"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Post',
  head() {
    return {
      title: this.post.title || 'Post' + ' | Blog',
    }
  },
  data() {
    return {
      post: {},
    }
  },
  async fetch() {
    const post = await this.$content('posts', this.$route.params.slug).fetch()

    this.post = post
    this.slug = post.slug
  },
  methods: {
    sharePlatform: function (platform, text, url) {
      if (platform == 'twitter') {
        return 'https://twitter.com/intent/tweet?text=' + text
      } else if (platform == 'telegram') {
        return 'https://t.me/share/url?url=' + url + '&text=' + text
      } else if (platform == 'whatsapp') {
        return 'https://api.whatsapp.com/send?text=' + text
      }
    },

    date(slug) {
      return moment(slug).format('DD.MM.YYYY')
    },
  },
}
</script>

<style>
.share-platform {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 9999px;
  width: 2.75rem;
  height: 2.75rem;
  float: left;
}

.share-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
}

.share-i {
  font-size: 1.75em;
}

.sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2s infinite ease-in-out both;
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 20%;
  height: 20%;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-chase-dot-before 2s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.sk-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.sk-chase-dot:nth-child(2):before {
  animation-delay: -1s;
}
.sk-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.sk-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.sk-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.sk-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
