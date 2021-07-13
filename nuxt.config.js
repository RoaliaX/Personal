export default {
  target: "static",
  srcDir: "src",
  ssr: false,
  head: {
    title: "Home | Roxza",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://ianlunn.github.io/Hover/css/hover.css",
      },
      {
        rel: "stylesheet",
        href: "https://pro.fontawesome.com/releases/v5.13.1/css/all.css",
        integrity:
          "sha384-B9BoFFAuBaCfqw6lxWBZrhg/z4NkwqdBci+E+Sc2XlK/Rz25RYn8Fetb+Aw5irxa",
        crossorigin: "anonymous",
      },
    ],
  },

  css: ["@/assets/css/main.css"],
  loading: true,
  plugins: [
    "~/plugins/disqus",
    {
      src: "@/plugins/VueLanyard",
      mode: "client",
    },
  ],
  generate: {
    fallback: true,
  },
  components: true,

  buildModules: ["nuxt-windicss"],

  modules: [["@nuxt/content"]],

  content: {},

  build: {},
};
