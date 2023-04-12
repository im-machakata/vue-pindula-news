<template>
    <div class="comment">
        <h3 class="name font-bold">{{ comment.name }}</h3>
        <div class="comment mb-4">{{ comment.text }}</div>
    </div>
</template>
<script>
export default {
    name: 'CommentItem',
    props: ['comment']
}
</script>