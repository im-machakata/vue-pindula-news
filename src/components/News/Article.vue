<template>
  <aside class="read-article relative z-10 text-white w-full top-0 left-0" @click="this.$emit('close-article')">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg z-30">
            <div class="container p-4 text-black">
              <div class="flex justify-center">
                <span class="py-1 w-40 bg-blue-400 hover:bg-blue-600 transition-all rounded-lg my-2"></span>
              </div>
              <h2 class="news-title text-blue-900 hover:text-blue-900" v-bind:title="news.title">{{ news.title }}</h2>
              <p v-html="news.content"></p>
            </div>
          </div>
        </div>
      </div>
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
