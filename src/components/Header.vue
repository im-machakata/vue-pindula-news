<template>
    <a href="/" class="my-0"><img alt="Vue logo" class="mx-auto my-0" src="../assets/logo.png" /></a>
    <div class="title text-2xl font-bold text-gray-800 mt-3 mb-5">{{ msg }}</div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        title: String
    },
    data(){
        return {
            msg: null
        }
    },
    created(){
        this.msg = this.title ? this.title : 'Pindura';
    }
}
</script>
<style scoped>
img {
    border: 2px solid var(--primary);
    border-radius: 0.5em;
    padding: 12px 8px 6px 8px;
    height: 100px;
    width: 100px;
}
</style>