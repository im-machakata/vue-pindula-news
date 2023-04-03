<template>
  <article class="news-item" :class="{ closed: !item.is_open }" @click="this.$emit('view-article', item)">
    <img class="news-image" v-bind:src="item.image_src">
    <div>
      <a class="news-title" v-bind:title="item.title">{{ item.title }}</a>
      <p class="text-sm font-sans">
        <strong>Published</strong>: {{ item.published }} 
        <strong>by</strong> {{ item.author }}
      </p>
      <p class="text-sm font-sans excerpt" v-html="item.excerpt"></p>
    </div>
  </article>
</template>
<script>
export default {
  name: 'News',
  props: {
    news: Array
  },
}
</script>
<style scoped>
.news-item.closed .excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
  