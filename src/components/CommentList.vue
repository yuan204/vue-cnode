<template>

   <div class="comment-list">
       <header>{{replies.length}} 回复</header>
       <Comment class="comment" v-for="(reply,i) in replies" :reply="reply" :key="reply.id" :layer="i+1"></Comment>
   </div>
</template>

<script>
    import Comment from "@/components/Comment";
    export default {
        name: "CommentList",
        components: {Comment},
        props: {
            replies: {
                type: Array,
            },
        },
    }
</script>

<style scoped>
 header {
     background-color: #F6F6F6;
     padding: 10px;
 }
    .comment {
        padding: 10px;
    }
</style>
