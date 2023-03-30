<template>
  <footer class="page-footer">
    Learn something new everyday.
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  methods: {
    menuClicked: (e,text)=>{
        e.preventDefault();
        console.log('Wanna view',text+'?');
    }
  },
  data() {
    return {
      items: [
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
      msg: null
    }
  },
}
</script>
<style scoped>
</style>