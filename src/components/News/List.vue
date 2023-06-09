<template>
  <NewsItems :news="latest_news.results" v-show="has_news" @read-article="read_article"></NewsItems>
  <NewsArticle v-if="view_article" :news="view_article" @close-article="view_article = false"></NewsArticle>
  <section v-show="connection_error && !is_loading" class="text-white my-5 px-3 py-3 lg:text-center">
    An error occured connecting to the server. <a @click="load_news()" class="hover:underline">Retry</a>
  </section>
  <Loader v-show="is_loading"></Loader>
  <Pagination :next="latest_news.next" :previous="latest_news.previous" @previous-page="prv_article"
    @next-page="next_article">
  </Pagination>
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
      return this.latest_news.results?.length > 0;
    },
  },
  methods: {
    read_article(item) {
      this.view_article = item;
    },

    next_article() {
      this.current_url = atob(this.urls.proxy) + encodeURI(this.latest_news.next);
      this.load_news();
    },
    prv_article() {
      this.current_url = atob(this.urls.proxy) + encodeURI(this.latest_news.previous);
      this.load_news();
    },
    load_news(url = null) {
      // show loader until done
      this.is_loading = true;

      if (!this.current_url) {
        // set url when empty
        url = !url ? atob(this.urls.news) : url;
        url = atob(this.urls.proxy) + encodeURI(url);

        // set current url incase of retries
        this.current_url = url;
      } else {
        url = this.current_url;
      }

      // fetch news items
      fetch(url)

        // convert result to json if successful
        .then(response => response.json())

        // process the results
        .then(response => {

          // store response in the local variable
          this.latest_news = response;

          // add an is_open key 
          this.latest_news.results = response.results.map(v => ({ ...v, is_open: false }));

          // hide error message & loader
          this.connection_error = false;
          this.is_loading = false;

          // scroll to top
          window.scrollTo(0, 0);
        })

        // show error message
        .catch(() => {

          // show error message & hide loader
          this.connection_error = true;
          this.is_loading = false;
        });
    },
  },
  data() {
    return {
      latest_news: [],
      is_loading: true,
      view_article: false,
      connection_error: false,
      current_url: null,
      urls: {
        ads: 'aHR0cHM6Ly96ZXJvLnBpbmR1bGEuY28uencvYXBpL3Byb2R1Y3RzLw==',
        news: 'aHR0cHM6Ly96ZXJvLnBpbmR1bGEuY28uencvYXBpL3Bvc3RzLw==',
        proxy: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/eC1hcGkta2V5PWVmMmY4ZjQwZTdlYTQ5NTk5NGYwYTg5ZWUxODkwOGY1JmJyb3dzZXI9ZmFsc2UmdXJsPQ=='
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
