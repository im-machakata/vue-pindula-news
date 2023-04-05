<template>
    <section aria-label="Page navigation">
        <div class="flex justify-center mb-5">
            <div class="pill" @click="this.$emit('previous-page', previous)" v-show="previous">Previous Page</div>
            <div class="pill" @click="this.$emit('next-page', next)" v-show="next">Next Page</div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Pagination',
    props: {
        previous: String,
        next: String,
    },
    emits: ['previous-page', 'next-page']
}
</script>