<template>
    <div class="comment">
        <div class="name flex">
            <h3 class="font-bold mr-1">{{ comment.name }}</h3> &ndash; {{ comment.created_on }}
        </div>
        <div class="comment mb-4 border-b pb-2">{{ comment.text }}</div>
        <div class="replies" v-if="comment.children.length > 0">
            <div class="reply-one" v-for="child in comment.children">
                <div class="comment ml-4">
                    <div class="name flex">
                        <h3 class="font-bold mr-1">{{ child.name }}</h3> &ndash; {{ child.created_on }}
                    </div>
                    <div class="comment mb-4 border-b pb-2">{{ child.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CommentItem',
    props: ['comment']
}
</script>