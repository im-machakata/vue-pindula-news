<template>
  <section class="news mx-0">
    <ul class="flex flex-col w-full p-0">
        <li v-for="item in news" class="px-2 border"><a v-bind:href="item.href" @click="menuClicked($event,item.text)">{{item.text}}</a></li>
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