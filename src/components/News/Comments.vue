<template>
    <aside class="comments text-white">
        <a class="news-title" v-bind:title="news.title">{{ news.title }}</a>
        <p class="text-sm font-sans">
        <div class="flex flex-row flex-wrap my-1">
            <div class="post-meta-info">
                <i class="fa fa-user mr-1" aria-hidden="true"></i>
                {{ news.author }}
            </div>
            <div class="post-meta-info">
                <i class="fa fa-clock" aria-hidden="true"></i>
                {{ news.published }}
            </div>
            <div class="post-meta-info">
                <i class="fa fa-comments mr-1" aria-hidden="true"></i>
                {{ news.comments }}
            </div>
            <div class="post-meta-info">
                <i class="fa fa-tags mr-1" aria-hidden="true"></i>
                <span v-html="get_category(news.category.name)"></span>
            </div>
        </div>
        </p>
        <p class="text-sm font-sans excerpt flex flex-row flex-wrap">
            <span v-html="news.excerpt"></span>
        </p>
    </aside>
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
            }
        }
    },
    methods: {
        load_comments() {

            // set url
            url = atob(this.urls.proxy) + atob(this.urls.comments) + encodeURI(this.slug);

            // fetch news items
            fetch(url)

                // convert result to json if successful
                .then(response => response.json())

                // process the results
                .then(response => {

                    // store response in the local variable
                    this.latest_news = response;

                    // add an is_open key 
                    this.latest_news.results = response.results.map(v => ({ ...v, is_open: false }));

                    // hide error message & loader
                    this.connection_error = false;
                    this.is_loading = false;

                    // scroll to top
                    window.scrollTo(0, 0);
                })

                // show error message
                .catch(() => {

                    // show error message & hide loader
                    this.connection_error = true;
                    this.is_loading = false;
                });
        }
    },
    created: {
        // fetch();
        // aHR0cHM6Ly96ZXJvLnBpbmR1bGEuY28uencvYXBpL2Rpc2N1c3Npb25zL2NvbW1lbnRzP3NsdWc9
        // https://zero.pindula.co.zw/api/discussions/comments?slug=article-slug-url&version=3
        //this.load_comments();
    }
}
</script>