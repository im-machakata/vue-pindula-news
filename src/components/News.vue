<template>
  <p v-show="news.length < 1" class="text-white mt-5 px-3 pt-3 lg:text-center flex lg:justify-center">
    Hie! I use an unconventional way to get news from <a href="//zero.pindula.co.zw"
      class="text-cyan-400 mx-1">pindula</a> so
    please give me a few seconds to load.
  </p>
  <section class="news-list">
    <div v-for="item in news" class="news-item" :key="item.id">
      <img class="news-image" v-bind:src="item.image">
      <div>
        <a class="news-title" v-bind:title="item.title" target="_blank" @click="readArticle = true">{{ item.title
        }}</a>
        <p class="text-sm font-sans excerpt" v-html="item.excerpt"></p>
      </div>
      <Article v-if="readArticle" author="{{item.author}}"> {{ item.content }}</Article>
    </div>
  </section>
</template>
<script>
import Article from './Article.vue'

export default {
  name: 'News',
  components: {
    Article,
  },
  methods: {
    menuClicked: (e, text) => {
      e.preventDefault();
      console.log('Wanna view', text + '?');
    },
    fetchNews() {
      fetch(atob(this.news_url))
        .then(response => response.json())
        .then(response => {
          this.news = response.results
        })
        .catch(err => {
          alert("Failed to connect to server.")
        });
    }
  },
  data() {
    return {
      news: [],
      readArticle: false,
      news_url: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcG9zdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U=',
      ads_url: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/dXJsPWh0dHBzJTNBJTJGJTJGemVyby5waW5kdWxhLmNvLnp3JTJGYXBpJTJGcHJvZHVjdHMmeC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2U='
    }
  },
  async created() {
    this.fetchNews();
  }
}
</script>
<style scoped>
img {
  height: 200px;
}

a {

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
