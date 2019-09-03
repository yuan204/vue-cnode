<template>
    <div class="comment">
        <div class="title">
            <router-link :to="{name:'user',params:{id:reply.author.loginname}}">
                <img :src="reply.author.avatar_url" :alt="reply.author.loginname">
            </router-link>
            <span class="time">
                <span class="name">{{reply.author.loginname}}</span>
                <span>{{layer}}楼•{{reply.create_at | fromNow}}</span>
            </span>
            <span class="like">
                 <i class="iconfont icon-like" ></i>
                <span>{{reply.ups.length}}</span>
            </span>
        </div>
        <div  class="content markdown-body" v-html="reply.content">
        </div>
    </div>
</template>

<script>
    import "github-markdown-css"
    export default {
        name: "Comment",
        props: {
            reply: {
                type: Object,

            },
            layer: {
                type:Number
            }
        },
    }
</script>

<style scoped>
    .comment {
        background-color: #fff;
        border-top: 1px solid #F0F0F0;

    }



    .comment img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .name {
        font-size: 12px;
        color: #666;
        margin-right: 5px;
    }
    .like {
        float: right;
    }
    .time {
        font-size: 11px;
        color: #08c;
    }
    .content {
        margin-top: 10px;
    }
    .like span {
        color: gray;

    }
    .like i {
        display: inline-block;
        margin-right: 5px;
    }
</style>
