<template>
  <section class="news px-6 py-5">
    <div v-for="item in news" class="text-left text-white text-lg py-4">
      <a v-bind:href="item.href" @click="menuClicked($event, item.text)">{{ item.text }}</a>
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
    }
  },
  data() {
    return {
      news: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'News',
          href: '/news',
        },
        {
          text: 'Jobs',
          href: '/jobs',
        },
        {
          text: 'Market',
          href: '/market',
        },
      ],
    }
  },
  created() {
    //
  }
}
</script>