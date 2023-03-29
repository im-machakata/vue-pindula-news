<template>
  <footer class="border-t-2 py-4 fixed bottom-0 w-full text-white">
    2023 &copy; Copyright of <a href="//twitter.com/immachakata" target="_blank" class="text-cyan-200">immachakata</a>
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