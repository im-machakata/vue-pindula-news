<template>
    <section aria-label="Page navigation">
        <div class="flex justify-center mb-5">
            <div class="pill" @click="this.$emit('previous-page')" v-show="previous">Previous Page</div>
            <div class="pill" @click="this.$emit('next-page')" v-show="next">Next Page</div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Pagination',
    props: {
        previous: Boolean,
        next: Boolean,
    },
    emits: ['previous-page', 'next-page']
}
</script>