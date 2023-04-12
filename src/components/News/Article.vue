<template>
  <aside class="read-article" @click="this.$emit('close-article')">

    <!-- Overlay -->
    <div class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50"></div>

    <!-- The Dialog -->
    <div class="dialog mx-auto lg:mx-2 pb-4">
      <div class="rounded-md overflow-y-scroll max-w-full">
        <div class="flex justify-center mb-2">
          <div class="py-1 bg-blue-400 rounded-lg w-32"></div>
        </div>
        <h2 class="text-3xl" v-bind:title="news.title">{{ news.title }}</h2>
        <a :href="'//zero.pindula.co.zw/' + news.slug" class="pb-2" target="_blank">
          https://zero.pindula.co.zw/{{ news.slug }}</a>
        <div class="pr-2">
          <p v-html="news.content" class="the-news"></p>
          <Comments :slug="news.slug"></Comments>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import Comments from "../Comments/Comments.vue"
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
  height: 80vh;
  max-height: 80vh;
}
</style>
