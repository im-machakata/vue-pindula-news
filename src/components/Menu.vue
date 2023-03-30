<template>
    <nav class="mx-auto shadow-md border-y-2 bg-blue-900 w-full py-4">
        <ul class="flex flex-row justify-around items-center lg:mr-10 font-semibold w-full font-sans">
            <li v-for="item in items" class="px-2 text-white"><a v-bind:href="item.href" @click="menuClicked($event,item.text)">{{item.text}}</a></li>
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