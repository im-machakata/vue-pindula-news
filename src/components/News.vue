<template>
  <p v-show="news.length < 1" class="text-white mt-5 px-3 pt-3">Hie! I use an unconventional way to get news from <a href="//zero.pindula.co.zw">pindula</a> so please give me a few seconds.</p>
  <section class="news-list">
    <div v-for="item in news"
      class="news-item" :key="item.id">
      <img class="news-image w-full" v-bind:src="item.image_src">
      <div class="px-3 pb-4 pt-3 bg-blue-900 rounded-b mt-0">
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
    debugImage(uri) {
      console.log(uri);
    }
  },
  data() {
    return {
      news: []
    }
  },
 async created() {
    let key = atob('YTkyNmNkMDA5YWQzMzQ5MmM4YjFjYTRlOWZiMzQ1ODY=');
    let url = "https://api.scraperapi.com/?api_key="+key+"&url=https://zero.pindula.co.zw/api/posts";
    let response = await fetch(url);
    response = await response.json();
    this.news = response.results;
  }
}
</script>
<style scoped>
.news-image {
  height: 180px;
}
</style>
