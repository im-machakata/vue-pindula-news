<template>
  <Header></Header>
  <Menu></Menu>
  <News></News>
  <Footer></Footer>
</template>

<script>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import News from './components/News.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Header,
    News,
    Footer,
  }
}
</script>
