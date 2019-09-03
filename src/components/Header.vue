<template>
    <div class="wrapper">
        <div class="container">
            <header>
                <div class="logo-search">
                    <a href="#" class="logo">
                        <router-link :to="{name:'home'}">
                            <img src="../assets/img/cnodejs_light.svg" alt="cnode">
                        </router-link>
                    </a>
                </div>
                <nav>

                    <ul v-if="$store.getters.isLogin">
                        <li>
                            <router-link :to="{name:'messages'}" >
                             <span class="message-count" v-if="$store.state.messageCount > 0">{{$store.state.messageCount}}</span>  未读消息
                            </router-link>
                        <li>
                            <router-link :to="{name:'home'}" @click.native="exit">退出</router-link>
                        </li>
                    </ul>
                    <ul v-else>
                        <li>
                            <router-link :to="{name:'home'}">
                                首页
                            </router-link>
                        <li>
                            <router-link :to="{name:'login'}">登录</router-link>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    </div>

</template>

<script>
    export default {
        name: "Header",
        methods: {
            exit() {
                this.$store.commit("exit")
                this.$message.info({
                    message: "已登出",
                    duration:1000
                })
            },

        },
    }
</script>

<style scoped>
    @import "../style/reset.css";
    .wrapper {

        background-color: #444444;
    }
 header {

     display: flex;
     justify-content: space-between;
     padding: 10px 0;
 }
    nav ul {
        display: flex;
        align-items: center;
        height: 100%;
    }
    nav ul li {
        margin: 0 5px;
    }
    nav ul li a {
        color: #ccc;
        font-size: 14px;
        display: inline-block;
        padding: 0 15px;
    }
    nav ul li a:hover {
        color: white;
    }
    .logo {
        display: inline-block;
        width: 120px;
    }
    .logo img {
        min-width: 100%;
    }
    .message-count {
        border-radius: 8px;
        width: 5px;
        height: 5px;
        padding: 5px;
        background-color: #80bd01;
    }
</style>
