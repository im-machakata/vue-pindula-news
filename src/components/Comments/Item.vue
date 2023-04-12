<template>
    <div class="comment flex">
        <div class="name">{{ comment.name }}</div>
        <div class="comment"></div>
    </div>
</template>
<script>
export default {
    name: 'CommentItem',
    props: ['comment']
}
</script>