<template>
    <nav class="mx-auto shadow-md border-y-4 bg-blue-900 w-full py-4">
        <ul class="flex flex-row justify-around items-center lg:mr-10 font-semibold w-full font-sans cursor-pointer">
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
            text: 'Jobs',
            href: '//zero.pindula.co.zw/jobs',
        },
        {
            text: 'Market',
            href: '//zero.pindula.co.zw/market',
        },
      ],
      msg: null
    }
  },
}
</script>