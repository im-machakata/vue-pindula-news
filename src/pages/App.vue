<template>
  <Header></Header>
  <Menu></Menu>
  <NewsList></NewsList>
  <Footer></Footer>
</template>

<script>
import Menu from '../components/Menu.vue'
import Header from '../components/Header.vue'
import NewsList from '../components/News/List.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Header,
    NewsList,
    Footer,
  },
}
</script>
