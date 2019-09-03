<template>
    <div class="post" v-if="post">
        <router-link :to="{name:'user',params:{id:post.author.loginname}}">
            <img :src="post.author.avatar_url" alt="post.author.loginname" class="author-avatar">
        </router-link>

        <span class="count" v-if="post.reply_count !== undefined && post.visit_count !== undefined" >
                              <span class="reply-count">{{post.reply_count}}</span>
                        /
                        <span style="font-size: 10px;color: #b4b4b4">{{post.visit_count}}</span>
                        </span>

        <div class="tab" :style="{backgroundColor: post.top || post.good ? '#80bd01' : '#e5e5e5',color: post.top || post.good ? 'white' : '#999'}" v-if="tab(post)">{{tab(post)}}</div>
        <span class="title" style="display: inline-block;margin-left: 10px;"><router-link :to="{name:'topic',params:{id:post.id}}">{{post.title}}</router-link></span>
        <span class="last-reply-time">
             <span>{{post.last_reply_at | fromNow}}</span>
        </span>

    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            post: {
                type: Object,
            },
        },
        data() {
            return {
                map: {
                    share: "分享",
                    ask: "问答",
                    job: "招聘"
                }
            }
        },
        methods: {
            tab(post) {
                if (post.top)
                    return "置顶"
                else if (post.good)
                    return "精华"
                else
                    return this.map[post.tab]
            }
        },
    }
</script>

<style scoped>
    .author-avatar {
        width: 30px;
        height: 30px;
    }
    .tab {
        font-size: 12px;
        padding: 2px 4px;
        display: inline-block;
        margin: 0 5px;
    }
    .last-reply-time {
        color: #778087;
        font-size: 12px;
        position: absolute;
        right: 20px;
    }
    .post {
        padding: 10px 5px;
        border-top: 1px solid #f0f0f0;
        display: flex;
        align-items: center;
        font-size: 12px;
        position: relative;
    }
    .reply-count {
        font-size: 14px;
        color: #9e78c0;
    }
    .title {
        font-size: 16px;

    }
    .count {
        width: 70px;
        text-align: center;
    }
    a {
        color: #333;
    }
</style>
