<template>
    <div class="comment-container">
        <div class="comment-parrent" :class="{ 'rounded-br-none': comment.children.length > 0 }">
            <div class="name">
                <span class="font-bold mr-1">{{ comment.name }}</span>
                <span class="text-neutral-700 ml-1">{{ comment.created_on }}</span>
            </div>
            <div class="comment pb-2">{{ comment.text }}</div>
        </div>
        <div class="comment-replies" v-if="comment.children.length > 0">
            <div class="reply-one" v-for="child in comment.children">
                <div class="comment ml-2">
                    <div class="name">
                        <span class="font-bold mr-1">{{ child.name }}</span> &ndash; <span class="text-neutral-700">{{
                            child.created_on }}</span>
                    </div>
                    <div class="pt-1 comment mb-4">{{ child.text }}</div>
                    <div class="replies mb-3 ml-6" v-if="child.children.length > 0">
                        <div class="reply rounded border" v-for="muzukuru in child.children">
                            <div class="comment ml-2">
                                <div class="name pt-2">
                                    <span class="font-bold mr-1">{{ muzukuru.name }}</span> &ndash; <span
                                        class="text-neutral-700">{{ muzukuru.created_on }}</span>
                                </div>
                                <div class="comment mb-2">{{ muzukuru.text }}</div>
                            </div>
                        </div>
                    </div>
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