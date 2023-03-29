<template>
  <section class="news container">
    <ul class="flex flex-col justify-content-start w-full">
        <li v-for="item in news" class="px-2"><a v-bind:href="item.href" @click="menuClicked($event,item.text)">{{item.text}}</a></li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'News',
  methods: {
    menuClicked: (e,text)=>{
        e.preventDefault();
        console.log('Wanna view',text+'?');
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
  created(){
    //
  }
}
</script>