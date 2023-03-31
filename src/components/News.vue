<template>
  <p v-show="news.length < 1" class="text-white mt-5 px-3 pt-3 lg:text-center">Hie! I use an unconventional way
    to
    get news from <a href="//zero.pindula.co.zw" class="text-cyan-400">pindula</a> so please give me a few seconds to load.</p>
  <section class="news-list">
    <div v-for="item in news" class="news-item" :key="item.id">
      <img class="news-image" v-bind:src="item.image_src">
      <div>
        <a class="news-title" v-bind:href="item.canonical" target="_blank">{{ item.title }}</a>
        <p class="text-sm font-sans" v-html="item.excerpt"></p>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'News',
  methods: {
    menuClicked: (e, text) => {
      e.preventDefault();
      console.log('Wanna view', text + '?');
    },
  },
  data() {
    return {
      news: [],
    }
  },
  async created() {
    let url = "https://api.scrapingant.com/v2/general?url=https%3A%2F%2Fzero.pindula.co.zw%2Fapi%2Fposts&x-api-key=762b12711c704b36af4cefc1e49382a1&browser=false";
    fetch(url).then(response => response.json()).then(response => this.news = response.results).catch(err => alert("Failed to connect to server."));
  }
}
</script>
<style scoped>
img {
  height: 200px;
}
</style>
