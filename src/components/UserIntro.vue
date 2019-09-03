<template>
    <SideBar v-if="author">
        <template #header>
            {{title}}
        </template>
        <template #content>
            <div>
                <div class="author" v-if="author">
                    <router-link :to="{name:'user',params:{id:author.loginname}}">
                        <img :src="author.avatar_url" :alt="author.loginname" class="avatar">
                    </router-link>
                    <router-link :to="{name:'user',params:{id:author.loginname}}">
                        <span  href="#">{{author.loginname}}</span>
                    </router-link>

                </div>
                <p class="score" v-if="author">积分: {{author.score}}</p>
            </div>
        </template>
    </SideBar>
</template>

<script>
    import SideBar from "@/components/SideBar";
    export default {
        name: "UserIntro",
        components:{
            SideBar
        },
        props: ["author","title"]
    }
</script>

<style scoped>
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
        width: 48px;
        height: 48px;
    }
    a {
        color: #778087;
    }
</style>
