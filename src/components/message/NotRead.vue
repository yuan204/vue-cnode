<template>
<SideBar>
    <template #header>
        <router-link :to="{name:'home'}" class="header">主页</router-link> / 新消息
    </template>
    <template #content>
        <ul v-if="messages.length > 0">
            <li v-for="message in messages" class="message" :key="message.id" @click="markOne(message.id)">
                <router-link :to="{name:'user',params:{id:message.author.loginname}}">{{message.author.loginname}}</router-link>
                回复了你的话题
                <router-link :to="{name:'topic',params:{id:message.topic.id}}">{{message.topic.title}}</router-link>
            </li>
        </ul>
        <p v-else>无消息</p>
    </template>
</SideBar>
</template>

<script>
    import SideBar from "@/components/SideBar";
    import axios from "axios";


    export default {
        name: "NotRead",
        components: {SideBar},
        props: {
            messages: {
                type: Array,
            },
        },
        methods: {
            markOne(id) {
                axios.post(` https://cnodejs.org/api/v1/message/mark_one/${id}`,{
                    accesstoken: this.$store.state.accessToken
                })
            }
        },


    }
</script>

<style scoped>
.message {
    padding: 10px 5px;
    border-bottom: 1px solid #F0F0F0;
}
a {
    color: #08c;
}
    .header {
        color: #80bd01;
    }
</style>
