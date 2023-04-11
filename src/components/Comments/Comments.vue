<template>
    <section class="comments text-white">
    </section>
</template>
<script>

export default {
    name: 'Comments',
    props: ['slug'],
    data() {
        return {
            urls: {
                comments: 'aHR0cHM6Ly96ZXJvLnBpbmR1bGEuY28uencvYXBpL2Rpc2N1c3Npb25zL2NvbW1lbnRzP3ZlcnNpb249MyZzbHVnPQ==',
                proxy: 'aHR0cHM6Ly9hcGkuc2NyYXBpbmdhbnQuY29tL3YyL2dlbmVyYWw/eC1hcGkta2V5PTc2MmIxMjcxMWM3MDRiMzZhZjRjZWZjMWU0OTM4MmExJmJyb3dzZXI9ZmFsc2UmdXJsPQ=='
            },
            comments: [],
            connection_error: false,
            is_loading: false
        }
    },
    methods: {
        load_comments() {

            // set url
            let url = atob(this.urls.proxy) + encodeURIComponent(atob(this.urls.comments) + this.slug);

            console.log(encodeURIComponent(atob(this.urls.comments) + this.slug));
            // fetch news items
            fetch(url)

                // convert result to json if successful
                .then(response => response.json())

                // process the results
                .then(response => {
                    console.log(results);

                    // store response in the local variable
                    this.comments = response;

                    // add an is_open key 
                    this.comments.results = response;

                    // hide error message & loader
                    this.connection_error = false;
                    this.is_loading = false;
                })

                // show error message
                .catch(() => {

                    // show error message & hide loader
                    this.connection_error = true;
                    this.is_loading = false;
                });
        }
    },
    async created() {
        // fetch();
        // aHR0cHM6Ly96ZXJvLnBpbmR1bGEuY28uencvYXBpL2Rpc2N1c3Npb25zL2NvbW1lbnRzP3NsdWc9
        // https://zero.pindula.co.zw/api/discussions/comments?slug=article-slug-url&version=3
        await this.load_comments();
    }
}
</script>