<template>
  <Header></Header>
  <Menu></Menu>
</template>

<script>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Header
  }
}
</script>
