<template>
  <Loader v-show="is_loading"></Loader>
  <section v-show="connection_error && !is_loading" class="text-white my-5 px-3 py-3 lg:text-center">
    An error occured connecting to the server. <a @click="load_news()" class="hover:underline">Retry</a>
  </section>
  <NewsItem :news="latest_news" v-show="has_news" @read-article="toggle_expand_news"></NewsItem>
  <NewsArticle v-show="read_article"></NewsArticle>
</template>
<script>
import NewsArticle from "./Article.vue"
import NewsItem from "./Items.vue"
import Loader from "../Loader.vue"
export default {
  name: 'NewsList',
  components: {
    Loader,
    NewsItem,
    NewsArticle,
  },
  computed: {
    has_news() {
      return this.latest_news?.length > 0;
    },
  },
  methods: {
    toggle_expand_news(index, item) {
      alert(`Working on displaying article`);
      this.read_article = this.latest_news[index];
    },
    load_news() {
      this.is_loading = true;
      fetch(atob(this.latest_news_url))
        .then(response => response.json())
        .then(response => {
          this.is_loading = false;
          this.latest_news = response.results.map(v => ({ ...v, is_open: false }));
          this.connection_error = false;
        })
        .catch(err => {
          this.is_loading = false;
          this.connection_error = true;
        });
    },
  },
  data() {
    return {
      latest_news: Array(),
      is_loading: true,
      connection_error: false,
      read_article: false,
      latest_news_url: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcG9zdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U=',
      ads_url: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcHJvZHVjdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U='
    }
  },
  async created() {
    await this.load_news();
  }
}
</script>
<style scoped>
.loader {
  height: 100px;
}
</style>
