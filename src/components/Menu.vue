<template>
  <nav class="mx-auto shadow-md border-y-2 border-blue-700 bg-blue-800 w-full py-4">
    <ul class="flex flex-row justify-around items-center lg:mr-10 font-semibold w-full font-sans cursor-pointer">
      <li v-for="item in items" class="px-2 text-white"><a v-bind:href="item.href" target="_b"
          @click="menuClicked($event, item.text)">{{ item.text }}</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Menu',
  methods: {
    menuClicked: (e, text) => {
      if (text == "Home") {
        e.preventDefault();
      }
    },
  },
  data() {
    return {
      items: [
        {
          text: 'News',
          href: '/',
        },
        {
          text: 'Jobs',
          href: '//zero.pindula.co.zw/jobs/',
        },
        {
          text: 'Shop',
          href: '//zero.pindula.co.zw/market/',
        },
      ],
      msg: null
    }
  },
}
</script>