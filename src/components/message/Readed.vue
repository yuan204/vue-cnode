<template>
    <SideBar>
        <template #header>
            过往信息
        </template>
        <template #content>
            <ul v-if="messages.length > 0">
                <li v-for="message in messages" class="message" :key="message.id">
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



    export default {
        name: "Readed",
        components: {SideBar},
        props: {
            messages: {
                type: Array,
            },
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

    li {
        font-size: 14px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>
