<template>
    <header class="text-center mt-12">
        <a href="/" class="logo rounded font-serif bg-white font-bold text-blue-600 text-8xl px-6 relative shadow-md md:py-1 select-none">P</a>
        <h1 class="title font-sans text-3xl mt-6 mb-5 text-white font-extrabold">{{ msg }}</h1>
    </header>
</template>
<script>
export default {
    name: 'Header',
    props: {
        title: String
    },
    data() {
        return {
            msg: null
        }
    },
    created() {
        this.msg = this.title ? this.title : 'Vue Pindula';
    }
}
</script>
<style scoped>
a {
width: 200px;
height: 200px;
}
img {
    border-radius: 0.5em;
    padding: 12px 8px 6px 8px;
    height: 100px;
    width: 100px;
}
</style>