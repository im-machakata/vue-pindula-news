<template>
    <section>
        <a href="/"><img alt="Vue logo" class="mx-auto mb-0 shadow-md rounded-md bg-white border-cyan-200 mt-7" src="../assets/logo.png" /></a>
        <div class="title font-sans text-2xl mt-3 mb-5 text-cyan-200 font-extrabold uppercase text-center">{{ msg }}</div>
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