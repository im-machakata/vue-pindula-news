<template>
  <section class="news-list">
    <div v-for="item in news"
      class="news-item">
      <div class="news-image">
      </div>
      <div class="px-3 pb-4 pt-3 bg-blue-900 rounded-b mt-0">
        <a class="news-title">{{ item.title }}</a>
        <p class="text-sm font-sans">{{ item.description }}</p>
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
  created() {
    let key = atob('YTkyNmNkMDA5YWQzMzQ5MmM4YjFjYTRlOWZiMzQ1ODY=');
    let url = "https://api.scraperapi.com/?api_key="+key+"&url=https://zero.pindula.co.zw/api/posts";
    let response = await fetch(url);
    response = await response.json();
    console.log(response.results);
    for (let i = 1; i < 10; i++) {
      this.news.push(
        {
          title: 'News title #' + i,
          description: 'A rather very long description for a interesting article number #' + i,
          image: "/assets/logo.png",
          image_alt: 'Image #' + i
        }
      );
    }
  }
}
</script>
<style scoped>
.news-image {
  height: 150px;
}
</style>
