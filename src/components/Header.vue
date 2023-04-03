<template>
    <section class="text-center mt-5 lg:mt-10">
        <a href="/" class="logo rounded font-serif bg-white text-blue-600 text-8xl px-6 relative shadow-md">P</a>
        <h1 class="title font-sans text-3xl mt-4 mb-5 text-white font-extrabold">{{ msg }}</h1>
    </section>
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
img {
    border-radius: 0.5em;
    padding: 12px 8px 6px 8px;
    height: 100px;
    width: 100px;
}
</style>