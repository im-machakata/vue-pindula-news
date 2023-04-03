<template>
  <section v-show="latest_news.length < 1 && !connection_error" class="text-white mt-5 px-3 pt-3 lg:text-center">
    <div aria-label="Loading..." role="status" class="loader">
      <svg class="w-6 animate-spin" viewBox="3 3 18 18">
        <path class="fill-indigo-200"
          d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z">
        </path>
        <path class="fill-indigo-800"
          d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z">
        </path>
      </svg>
    </div>
  </section>
  <section v-show="latest_news.length < 1 && connection_error" class="text-white mt-5 px-3 pt-3 lg:text-center">
    An error occured connecting to the server. <a @click="load_news()" class="hover:underline">Retry</a>
  </section>
  <section class="news-list">
    <div v-for="(item, index) in latest_news" class="news-item" :class="{ closed: !item.is_open }" :key="item.id"
      @click="toggle_expand_news(index)">
      <img class="news-image" v-bind:src="item.image_src">
      <div>
        <a class="news-title" v-bind:title="item.title">{{ item.title }}</a>
        <p class="text-sm font-sans"><strong>Published</strong>: {{ item.published }} <strong>by</strong> {{ item.author
        }}</p>
        <p class="text-sm font-sans excerpt" v-html="item.content"></p>
      </div>
    </div>
  </section>
  <section class="news-article" :class="{}"></section>
</template>
<script>
import Loader from "../Loader.vue"
export default {
  name: 'News',
  methods: {
    toggle_expand_news(index) {
      this.latest_news[index].is_open = !this.latest_news[index].is_open;
    },
    load_news() {
      fetch(atob(this.latest_news_url))
        .then(response => response.json())
        .then(response => {
          this.latest_news = response.results;
          response.results.forEach(element => {
            element.is_open = false;
            return element;
          });
          this.connection_error = false;
        })
        .catch(err => {
          this.connection_error = true;
        });
    },
  },
  data() {
    return {
      dummy_news: [],
      latest_news: [],
      selected_news: false,
      connection_error: false,
      latest_news_url: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcG9zdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U=',
      ads_url: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcHJvZHVjdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U='
    }
  },
  async created() {
    this.dummy_news = Array(10);
    await this.load_news();
  }
}
</script>
<style scoped>
img {
  height: 200px;
}

.loader {
  height: 100px;
}

.news-item.closed .excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
