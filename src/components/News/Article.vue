<template>
  <aside class="read-article" @click="this.$emit('close-article')">

    <!-- Overlay -->
    <div class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"></div>

    <!-- The Dialog -->
    <div class="dialog">
      <h2 class="news-title text-blue-900 hover:text-blue-900" v-bind:title="news.title">{{ news.title }}</h2>
      <a class="mb-2" :href="'//zero.pindula.co.zw/' + news.slug" target="_blank">zero.pindula.co.zw/{{ news.slug }}</a>
      <p v-html="news.content"></p>
    </div>
    <!-- <Comments></Comments> -->
  </aside>
</template>
<script>
import Comments from "./Comments.vue"
export default {
  name: 'Article',
  components: {
    Comments
  },
  props: ['news'],
  emits: ['close-article']
}
</script>
<style scoped>
.dialog {
  height: 75vh;
  max-height: 75vh;
}
</style>
