<template>
  <Loader v-show="is_loading"></Loader>
  <section v-show="connection_error && !is_loading" class="text-white my-5 px-3 py-3 lg:text-center">
    An error occured connecting to the server. <a @click="load_news()" class="hover:underline">Retry</a>
  </section>
  <NewsItems :news="latest_news" v-show="has_news" @read-article="read_article"></NewsItems>
  <NewsArticle v-show="view_article" :news="view_article" @close-article="view_article = false"></NewsArticle>
  <Pagination></Pagination>
</template>
<script>
import NewsArticle from "./Article.vue"
import NewsItems from "./Items.vue"
import Loader from "../Loader.vue"
import Pagination from "../Pagination.vue"
export default {
  name: 'NewsList',
  components: {
    Loader,
    NewsItems,
    NewsArticle,
    Pagination,
  },
  computed: {
    has_news() {
      return this.latest_news?.length > 0;
    },
  },
  methods: {
    read_article(item) {
      this.view_article = item;
    },
    load_news() {
      this.is_loading = true;
      fetch(atob(this.urls.news))
        .then(response => response.json())
        .then(response => {
          this.is_loading = false;
          this.latest_news = response.results.map(v => ({ ...v, is_open: false }));
          this.connection_error = false;
        })
        .catch(() => {
          this.is_loading = false;
          this.connection_error = true;
        });
    },
  },
  data() {
    return {
      latest_news: [],
      is_loading: true,
      view_article: false,
      connection_error: false,
      urls: {
        ads: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcHJvZHVjdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U=',
        news: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcG9zdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U=',
      }
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
