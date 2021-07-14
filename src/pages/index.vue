<template>
  <div class="container w-200 mx-auto py-1">
    <div class="flex items-center">
      <template v-if="$fetchState.pending">
        <Loader type="avatar" class="p-8" />
      </template>
      <template v-else>
        <img
          :src="`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`"
          class="rounded-full float-left w-50 h-50 p-8"
        />
      </template>

      <div class="text-center sm:text-left">
        <div>
          <h1 class="text-3xl font-black text-white">Hi, I'm Roxza.</h1>
        </div>
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

    <template v-if="activities.type == 0">
      <div class="p-8">
        <br />
        <CardVisualizer
          :name="activities.name"
          :application_id="activities.application_id"
          :details="activities.name"
          :date="activities.date"
          :id="activities.id"
          :state="activities.state"
          :large_image="activities.assets.large_image"
          :large_text="activities.assets.large_text"
          :small_image="activities.assets.small_image"
          :small_text="activities.assets.small_text"
        />
      </div>
    </template>
    <template v-else-if="activities.type == 2">
      <div class="p-8">
        <br />
        <CardSpotify
          :details="activities.details"
          :id="activities.id"
          :sync_id="activities.sync_id"
          :name="activities.name"
          :state="activities.state"
          :large_text="activities.assets.large_text"
          :large_image="activities.assets.large_image"
        />
      </div>
    </template>

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
import moment from "moment";
import projects from "~/assets/data/projects.json";

export default {
  name: "Home",
  head() {
    return {
      title: "Home | Roxza",
    };
  },
  data() {
    return { repos: [], projects: [], user: {}, activities: {} };
  },
  async fetch() {
    const getUser = await fetch(
      "https://api.lanyard.rest/v1/users/852918160730357789",
      {
        method: "GET",
      }
    ).then((res) => res.json());

    const repos = await fetch("https://api.github.com/users/roxza/repos", {
      method: "GET",
    }).then((res) => res.json());

    const filter = ["Roxza"];
    const filtRep = repos.filter(
      (repo) => repo.fork === false && !filter.includes(repo.name)
    );

    const activities = getUser.data.activities;

    const filtAct = getUser.data.listening_to_spotify
      ? activities.filter((c) => c.type === 2).pop()
      : activities.filter((c) => c.type === 0).pop();

    if (!getUser.data.listening_to_spotify) {
      var now = moment(new Date());
      var end = moment(filtAct ? filtAct.timestamps.start : "0000000000000");
      var duration = moment.duration(now.diff(end));
      var hrs = duration.hours();
      var mins = duration.minutes();
      var secs = duration.seconds();
      const date = hrs + ":" + mins + ":" + secs;
      this.activities = { ...filtAct, date };
    } else {
      this.activities = { ...filtAct };
    }

    this.repos = filtRep;
    this.user = getUser.data.discord_user;
    this.projects = projects.project;
  },
  methods: {
    github(owner, name) {
      return "https://github.com/" + owner + "/" + name;
    },
  },
};
</script>

<style>
.link {
  --tw-border-opacity: 0.75;
  border-color: rgba(107, 114, 128, var(--tw-border-opacity));
  border-bottom-width: 2px;
}
</style>
