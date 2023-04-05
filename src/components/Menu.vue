<template>
  <nav class="mx-auto shadow-md border-y-2 border-blue-700 bg-blue-800 w-full py-4">
    <ul class="flex flex-row justify-around items-center lg:mr-10 font-semibold w-full font-sans cursor-pointer">
      <li v-for="item in items" class="px-2 text-white">
        <a v-bind:href="item.href" target="_blank">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
      items: [
        {
          text: 'News',
          href: '//zero.pindula.co.zw/',
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
    }
  },
}
</script>