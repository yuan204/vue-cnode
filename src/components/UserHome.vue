<template>
    <div class="home-page">
        <header>
            <router-link to="/" class="home-link">主页</router-link>
            /
        </header>
        <main>
            <div class="author">
                <img :src="author.avatar_url" :alt="author.loginname" class="avatar">
                <span  href="#">{{author.loginname}}</span>
            </div>
            <p class="score" v-if="author">积分: {{author.score}}</p>
            <router-link v-if="topics" :to="{name:'collections',params:{user:author.loginname}}">{{topics.length}}个话题收藏</router-link>
            <p>注册时间 {{author.create_at | fromNow}}</p>
        </main>
    </div>
</template>

<script>
    export default {
        name: "UserHome",
        props: {
            author: {
                type: Object,
            },
            topics: {
                type: Array
            }
        },
        data() {
            return {
                collectTopics: 0
            }
        },


    }
</script>

<style scoped>

    header {
        padding: 10px;
        background-color: #F6F6F6;
    }
    main {
        background-color: #fff;
        padding: 10px;
    }
    .author {
        color: #778087;
        padding: 10px 0;
        display: flex;
        align-items: center;
    }
    .author img {
        margin-right: 10px;
    }
    .score {
        font-size: 14px;
    }
    .avatar {
        width: 40px;
        height: 40px;
    }
    .home-link {
        color: #80bd019;
    }
    main a  {
        color: #778087;
    }
    header a {
        color: #80bd01;
    }
    main > * {
        margin: 10px 0;
    }
    .home-page {
        color: #778087;
        font-size: 14px;
    }
</style>
