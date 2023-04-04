<template>
    <aside class="comments text-white">
        <a class="news-title"
            v-bind:title="news.title">{{ news.title }}</a>
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
    props: ['list'],
    created: {
        //https://zero.pindula.co.zw/api/discussions/comments?slug=article-slug-url&version=3
    }
}
</script>