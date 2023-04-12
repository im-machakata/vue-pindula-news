<template>
  <section class="news-list">
    <article class="news-item closed" v-for="item in news" :key="item.id"
      @click="this.$emit('read-article', item)">
      <img class="news-image" v-bind:src="item.image_src" v-bind:alt="item.image_caption" v-bind:title="item.title">
      <div class="details">
        <a class="news-title mb-1" :class="{ closed: !item.is_open }" @click.stop="item.is_open = !item.is_open"
          v-bind:title="item.title">{{ item.title }}</a>
        <p class="text-sm font-sans">
        <div class="flex flex-row flex-wrap my-1">
          <div class="post-meta-info">
            <i class="fa fa-user mr-1" aria-hidden="true"></i>
            {{ item.author }}
          </div>
          <div class="post-meta-info">
            <i class="fa fa-clock" aria-hidden="true"></i>
            {{ item.published }}
          </div>
          <div class="post-meta-info">
            <i class="fa fa-comments mr-1" aria-hidden="true"></i>
            {{ item.comments }}
          </div>
          <div class="post-meta-info">
            <i class="fa fa-tags mr-1" aria-hidden="true"></i>
            <span v-html="get_category(item.category.name)"></span>
          </div>
        </div>
        </p>
        <p class="text-sm font-sans excerpt flex flex-row flex-wrap">
          <span v-html="item.excerpt"></span>
        </p>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: 'NewsItems',
  props: {
    news: Array
  },
  methods: {
    get_category(value) {
      if (value.includes("/")) {
        value = value.split('/');
        return value[0];
      }
      return value;
    }
  },
  emits: [
    'read-article'
  ]
}
</script>
<style scoped>
img {
  height: 180px;
}

.news-title.closed {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-item .excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
  
