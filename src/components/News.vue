<template>
  <p v-show="news.length < 1 && !connection_error" class="text-white mt-5 px-3 pt-3 lg:text-center">
    Hie! I use an unconventional way to get news from <a href="//zero.pindula.co.zw" class="text-cyan-400">pindula</a> so
    please give me a few seconds to load.
  </p>
  <p v-show="connection_error && news.length < 1" class="text-white mt-5 px-3 pt-3 lg:text-center">
    An error occured connecting to the server. <a @click="fetchNews()" class="text-cyan-400">Retry</a>
  </p>
  <section class="news-list">
    <div v-for="item in news" class="news-item" :key="item.id">
      <img class="news-image" v-bind:src="item.image_src">
      <div>
        <a class="news-title" v-bind:title="item.title" target="_blank" v-bind:href="'//zero.pindula.co.zw/'+item.slug">{{ item.title }}</a>
        <p class="text-sm font-sans excerpt" v-html="item.excerpt"></p>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'News',
  methods: {
    fetchNews() {
      fetch(atob(this.news_url))
        .then(response => response.json())
        .then(response => {
          this.news = response.results;
          this.connection_error = false;
        })
        .catch(err => {
          this.connection_error = true;
        });
    }
  },
  data() {
    return {
      news: [],
      read_article: false,
      connection_error: false,
      news_url: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcG9zdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U=',
      ads_url: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcHJvZHVjdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U='
    }
  },
  async created() {
    await this.fetchNews();
  }
}
</script>
<style scoped>
img {
  height: 200px;
}

a.news-title {

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
