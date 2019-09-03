<template>
    <SideBar v-if="topics">
        <template #header>
            无人回复的话题
        </template>
        <template #content>
            <ul class="list">
                <li v-for="topic in noReplyTopics" :key="topic.id">
                    <router-link :to="{name:'topic',params:{id:topic.id}}">{{topic.title}}</router-link>
                </li>
            </ul>
        </template>
    </SideBar>
</template>

<script>
    import SideBar from "@/components/SideBar";
    import axios from "axios";
    export default {
        name: "NoReplies",
        components: {SideBar},
        data() {
            return {
                topics: []
            }
        },
        computed: {
            noReplyTopics() {
                return this.topics.filter(topic => topic.reply_count === 0).slice(0,5)
            }
        },
        created() {
            axios.get(`https://cnodejs.org/api/v1/topics`)
                .then(response => {
                    this.topics = response.data.data;
                })
        }
    }
</script>

<style scoped>
 li {
     color: #778087;
     font-size: 14px;
     padding: 5px 0;
     text-overflow:ellipsis;
     overflow:hidden;
     white-space: nowrap;

 }
    .list {
        padding: 10px 5px;
    }
 a {
     color: #778087;
 }
</style>
