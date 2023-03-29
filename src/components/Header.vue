<template>
    <section>
        <a href="/" class="my-0"><img alt="Vue logo" class="mx-auto my-0 shadow-md rounded-md border-2 border-cyan-200" src="../assets/logo.png" /></a>
        <div class="title text-2xl mt-3 mb-5 text-cyan-200 font-extrabold uppercase">{{ msg }}</div>
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