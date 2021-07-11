<template>
  <div class="container w-200 mx-auto py-1">
    <div class="flex items-center">
      <img
        src="~/assets/images/user/roxza.png"
        class="rounded-full float-left w-50 h-50 p-8"
      />
      <div class="text-center sm:text-left">
        <h1 class="text-3xl font-black text-white">Hi, I'm Roxza.</h1>
        <br />
        <p class="text-white">
          Hello, I'm a backend developer, I'm a 16 year old high school student,
          I'm very curious, I like to do new things, I recently started learning
          <a href="https://nuxtjs.org" target="_blank" class="link"> Nuxt.JS</a>
          and I make simple websites, if you want to know more about me, you can
          check <nuxt-link to="/about" class="link">page about me.</nuxt-link>
        </p>
      </div>
    </div>
    <div class="p-8">
      <h1 class="text-2xl">Projects</h1>
      <div class="mt-4 items-center">
        <div v-if="projects.length == 0">
          <Warning title="No Projects Here" />
        </div>
        <div v-else></div>
      </div>
    </div>

    <div class="p-8">
      <h1 class="text-2xl">My GitHub repositories</h1>
      <div class="mt-4 items-center">
        <div class="grid grid-cols-2 gap-2">
          <template v-if="$fetchState.pending">
            <Loader
              v-for="item in 2"
              :key="`repository.${item}`"
              type="repository"
            />
          </template>
          <template v-else-if="$fetchState.error">
            <Warning title="An error has occurred" />
          </template>

          <template v-else-if="!repos.length == 0">
            <CardRepository
              v-for="(repo, index) in repos"
              :key="index"
              :title="repo.name"
              :description="repo.description"
              :owner="repo.owner.login"
              :language="repo.language"
            />
          </template>
          <template v-else
            ><Warning title="No Github Repository Here"
          /></template>
        </div>
      </div>
    </div>
    <div class="p-8">
      <h1 class="text-2xl">Technologies I use</h1>
      <div class="rounded-t-xl overflow-hidden bg-gradient-to-r p-2">
        <div
          class="
            gap-2
            w-full
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          <CardTech title="Javascript" />
          <CardTech title="Css" />
          <CardTech title="Html" />
          <CardTech title="NodeJS" />
          <CardTech title="React" />
          <CardTech title="NextJS" />
          <CardTech title="NuxtJS" />
          <CardTech title="Vue" />
          <CardTech title="Vercel" />
          <CardTech title="Bootstrap" />
          <CardTech title="MongoDB" />
          <CardTech title="Sass" />
          <CardTech title="Github" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '~/assets/data/projects.json'
export default {
  name: 'Home',
  head() {
    return {
      title: 'Home | Roxza',
    }
  },
  data() {
    return { repos: [], projects: [] }
  },
  async fetch() {
    const repos = await fetch('https://api.github.com/users/roxza/repos', {
      method: 'GET',
    }).then((res) => res.json())

    const filter = ['Roxza']
    this.repos = repos.filter(
      (repo) => repo.fork === false && !filter.includes(repo.name)
    )

    this.projects = projects.project
  },
  methods: {
    github(owner, name) {
      return 'https://github.com/' + owner + '/' + name
    },
  },
}
</script>

<style>
.link {
  --tw-border-opacity: 0.75;
  border-color: rgba(107, 114, 128, var(--tw-border-opacity));
  border-bottom-width: 2px;
}
</style>
