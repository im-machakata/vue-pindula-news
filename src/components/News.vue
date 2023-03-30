<template>
  <section class="news-list px-6:md px-3 py-5 grid grid-cols-1 grid-cols-3:lg">
    <div v-for="item in news"
      class="text-left text-white border-2 hover:shadow-lg shadow rounded-md mb-5 cursor-pointer col">
      <div class="post-image bg-cyan-50 rounded-t p-2 mb-2 shadow-lg text-center">
      </div>
      <div class="px-3 py-4">
        <a class="text-2xl font-semibold font-serif">{{ item.title }}</a>
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
      news: [],
    }
  },
  created() {
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
.post-image {
  height: 140px;
}
</style>