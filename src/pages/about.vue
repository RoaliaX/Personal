<template>
  <div class="container w-200 mx-auto">
    <h1 class="text-3xl py-3">About</h1>
    <h1 class="text-xl py-1">
      Hello, you can read more about me on this page.
    </h1>
    <br />
    <p>
      Hello, I'm a high school student, I'm very curious and I like to discover
      new things. I made my first website with expressjs and then I learned many
      programming languages, finally I learned nuxtjs and made the website you
      are reading this article on. I have shared the website publicly on github.
      I know more than 5 programming languages and frameworks so far and I will
      keep learning new things. Thank you for reading this article.
    </p>
    <h1 class="text-xl py-5">If you want to support me, you can donate.</h1>

    <div id="patreon">
      <a href="https://www.patreon.com/"
        ><img
          style="width: 200px"
          src="~/assets/images/patreon/patreon-button.png"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  head() {
    return {
      title: "About | Roxza",
    };
  },
};
</script>
