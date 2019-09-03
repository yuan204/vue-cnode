<template>
    <div class="topic" v-if="topic">
       <main>
           <Article :topic="topic"></Article>
           <CommentList :replies="topic.replies" class="comment-list"></CommentList>
       </main>

        <div class="sideBarList" >
            <UserIntro  :author="author" title="作者" style="margin-top: 0"></UserIntro>
            <SideBar class="other-topics" >
                <template #header>
                    作者其它话题
                </template>
                <template #content>
                    <ul  v-if="author">
                        <li v-for="topic in author.recent_topics.slice(0,5)" :key="topic.id">
                            <router-link :to="{name:'topic',params:{id:topic.id}}">{{topic.title}}</router-link>
                        </li>
                    </ul>
                </template>
            </SideBar>
            <NoReplies></NoReplies>
        </div>

    </div>
</template>

<script>
    import Article from "@/components/Article";
    import SideBar from "@/components/SideBar";
    import axios from "axios";
    import CommentList from "@/components/CommentList";
    import NoReplies from "@/components/NoReplies";
    import UserIntro from "@/components/UserIntro";




    export default {
        name: "Topic",
        components: {
            UserIntro,
            NoReplies,
            CommentList,
            SideBar,
            Article
        },
        data() {
            return {
                topic: null,
                author: null
            }
        },
        methods: {
            getData() {
                axios.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
                    .then(response => {
                        this.topic = response.data.data;
                        return axios.get(`https://cnodejs.org/api/v1/user/${this.topic.author.loginname}`)
                    })
                    .then(response => {
                        this.author = response.data.data;

                    })

            }
        },
        watch: {
            '$route' (to, from) {
                // 对路由变化作出响应...
                this.getData()
            }
        },
        created() {
          this.getData()
        }

    }
</script>

<style scoped>
main {
    flex: 1;
    width: 0;
}

    .topic {
        display: flex;

    }
    .sideBarList {
        width: 290px;
        margin-left: 20px;
    }

    .comment-list {
        margin-top: 20px;
    }
    .other-topics ul li {

        font-size: 14px;
        padding: 5px 0;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space: nowrap;
    }
    .other-topics ul {
        padding: 10px 5px;
    }

    .sideBarList > * {
        margin-top: 20px;
    }

    a {
        color: #778087;
    }
</style>
