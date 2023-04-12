<template>
    <section class="comments overflow-y-visible">
        <h2 v-show="is_loading" class="mb-4">Loading comments...</h2>
        <h2 v-if="comments?.length > 0" class="mt-6 font-bold text-xl mb-2">Comments</h2>
        <CommentItem :comment="comment" v-for="comment in comments" :key="comment.id"></CommentItem>
    </section>
</template>
<script>
import CommentItem from './Item.vue'
export default {
    name: 'Comments',
    props: ['slug'],
    components: {
        CommentItem
    },
    data() {
        return {
            urls: {
                comments: 'aHR0cHM6Ly96ZXJvLnBpbmR1bGEuY28uencvYXBpL2Rpc2N1c3Npb25zL2NvbW1lbnRzP3ZlcnNpb249MyZzbHVnPQ==',
                proxy: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/eC1hcGkta2V5PWVmMmY4ZjQwZTdlYTQ5NTk5NGYwYTg5ZWUxODkwOGY1JmJyb3dzZXI9ZmFsc2UmdXJsPQ=='
            },
            comments: [],
            connection_error: false,
            is_loading: true
        }
    },
    methods: {
        load_comments() {

            // set url
            let url = atob(this.urls.proxy) + encodeURIComponent(atob(this.urls.comments) + this.slug);

            // fetch news items
            fetch(url)

                // convert result to json if successful
                .then(response => response.json())

                // process the results
                .then(response => {

                    // store response in the local variable
                    this.comments = response.results;

                    // hide error message & loader
                    this.connection_error = false;
                    this.is_loading = false;
                })

                // show error message
                .catch(() => {

                    // show error message & hide loader
                    this.connection_error = true;

                    // try after 4 secs
                    setTimeout(this.load_comments, 4000);
                });
        }
    },
    async created() {
        await this.load_comments();
    }
}
</script>