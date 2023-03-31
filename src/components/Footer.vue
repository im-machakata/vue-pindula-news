<template>
  <footer class="page-footer">
    Learn something new everyday. 
    <p>Designed by <a href="//github.com/im-machakata" target="_blank" class="hover:underline">Isaac Machakata</a></p>
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
}
</script>