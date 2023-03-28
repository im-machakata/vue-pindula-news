<template>
    <nav class="nav">
        <ul class="d-flex">
            <li v-for="item in items"><a v-bind:href="item.href" @click="menuClicked($event,item.text)">{{item.text}}</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: 'Menu',
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