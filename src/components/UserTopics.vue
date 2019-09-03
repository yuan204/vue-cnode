<template>
    <div class="user-topics">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <Post v-for="post in posts" :key="post.id" :post="post" class="post"></Post>
        </main>
    </div>
</template>

<script>
    import Post from "@/components/Post";
    export default {
        name: "UserTopics",
        components: {Post},
        props: {
            posts: {
                type: Array,
            },
        },

    }
</script>

<style scoped>
    header {
        background-color: #F6F6F6;
    }
    header,footer{
        padding: 10px;
    }
    footer {
        background-color: #fff;
        border-top: 1px solid #F0F0F0;
    }
    .post {
        background-color: #fff;
    }
</style>
