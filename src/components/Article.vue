<template>
    <section class="read-article text-white">
      {{author}}
    </section>
  </template>
  <script>
  export default {
    name: 'Article',
    props: ['author']
  }
  </script>