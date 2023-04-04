<template>
  <section class="read-article text-white">
        <!-- <Comments></Comments> -->
  </section>
</template>
<script>
import Comments from "./Comments.vue"
export default {
  name: 'Article',
  props: ['news']
}
</script>