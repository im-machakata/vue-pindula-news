<template>
  <footer class="page-footer">
    Learn something new everyday. 
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