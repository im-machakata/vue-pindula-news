<template>
    <div class="title text-2xl font-bold text-gray-800">{{ msg }}</div>
    <nav>
        <ul>
            <li v-for="item in items"><a v-bind:href="item.href" @click="menuClicked($event,item.text)">{{item.text}}</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: 'Menu',
  props: {
    title: String
  },
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
  created(){
    this.msg = this.title ? this.title : 'Pindura';
  }
}
</script>
<style scoped>
.title {
    font-size: 2.5em;
    margin-top: 0.5em;
    text-transform: uppercase;
    color: var(--secondary)
}
ul {
    list-style-type: none;
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    padding: 0 2em;
}
li {
    width: 100%;
    padding: 8px;
    margin: auto 2px;
    border: 2px solid #1545ca;
}
li a {
    text-decoration: none;
    width: 100%;
    color: var(--secondary);
    font-weight: 700;
}
</style>