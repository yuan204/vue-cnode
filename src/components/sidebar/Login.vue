<template>
    <div class="login">
        <SideBar>
            <template #header>
                <p>CNode：Node.js专业中文社区</p>

            </template>
            <template #content>
                <p class="info">您可以通过access-token <router-link :to="{name:'login'}">登录</router-link></p>
            </template>

        </SideBar>
    </div>
</template>

<script>
    import SideBar from "@/components/SideBar";
    export default {
        name: "SideBarLogin",
        components: {SideBar}
    }
</script>

<style scoped>
.info {
    font-size: 13px;
    color: #778087;
    padding: 10px 0;
}
    a {
        color: #5BC0DE;
    }
</style>
