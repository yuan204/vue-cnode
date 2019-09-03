<template>
        <div class="article" v-if="topic">
            <header class="article-header">
                <h1 class="title">
                    <span class="tab" v-if="tab">{{tab}}</span>
                    {{topic.title}}
                </h1>
                <div class="info">
                    <span>发布于 {{topic.create_at | fromNow}}</span>
                    <span>作者 {{topic.author.loginname}}</span>
                    <span>{{topic.visit_count}} 次浏览</span>
                    <span>来自 {{map[topic.tab]}}</span>
                </div>
                <div v-if="$store.getters.isLogin">
                    <button class="collect" @click="collect" v-if="!isCollect">收藏</button>
                    <button class="cancel-collect" @click="cancelCollect" v-else>取消收藏</button>
                </div>
            </header>
            <div class="markdown-body article-content" v-html="topic.content" >

        </div>

    </div>

</template>

<script>
    import axios from "axios";
    import "github-markdown-css"
    export default {
        name: "Article",
        props: {
            topic: {
                type:Object,
            },
        },
        data() {
            return {
                // topic: null,
                loaded:false,
                map: {
                    share: "分享",
                    ask: "问答",
                    job: "招聘"
                },

            }
        },
        computed: {
            tab() {
                if (this.topic.top)
                    return "置顶"
                else if (this.topic.good)
                    return "精华"
                else
                    return ""
            },
            isCollect() {
                return this.$store.state.collections.map(collection => collection.id).includes(this.topic.id)
            }
        },

        methods: {
            // getData() {
            //     axios.get(`https://cnodejs.org/api/v1/topic/${this.topicId}`)
            //         .then(response => {
            //             this.topic = response.data.data;
            //         })
            // },
            collect() {
                axios.post(`https://cnodejs.org/api/v1/topic_collect/collect`,{
                    accesstoken:this.$store.state.accessToken,
                    topic_id: this.topic.id
                }).then(() =>  axios.get(`https://cnodejs.org/api/v1/topic_collect/${this.$store.state.user.loginname}`)).then(response =>    this.$store.commit("updateCollections",response.data.data))
            },
            cancelCollect() {
                axios.post(`https://cnodejs.org/api/v1/topic_collect/de_collect`,{
                    accesstoken:this.$store.state.accessToken,
                    topic_id: this.topic.id
                }).then(() =>  axios.get(`https://cnodejs.org/api/v1/topic_collect/${this.$store.state.user.loginname}`)).then(response =>    this.$store.commit("updateCollections",response.data.data))
            }
        },
        created() {
           // this.getData()
        }

    }
</script>

<style scoped>
    @import "../style/reset.css";
    @import "../style/common.css";
    .article {
        background-color: #fff;
    }
    .article-header {
        border-bottom: 1px solid #eaecef;
        padding: 20px 10px 10px;
        position: relative;
    }
    .title {
        font-size: 22px;
        margin-bottom: 10px;
    }
     .article-content {
         padding: 20px;
         padding-top: 0;
     }

    .info span {
        font-size: 12px;
        color: #838383;
    }
    .info span::before {
        display: inline-block;
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #838383;
        vertical-align: middle;
        margin: 0 5px;
    }
    .tab {
        font-size: 12px;
        padding: 2px 4px;
        display: inline-block;
        margin: 0 5px;
        background-color: #80bd01;
        color: #ffffff;
    }
    .collect {
        background-color: #80BD01;
        color: white;
        padding: 5px 10px;
        border: none;
        position: absolute;
        bottom: 5px;
        right: 10px;
        cursor: pointer;
    }
    .cancel-collect {
        background-color: #E5E5E5;
        color: black;
        padding: 5px 10px;
        border: none;
        position: absolute;
        bottom: 5px;
        right: 10px;
        cursor: pointer;
    }
</style>
