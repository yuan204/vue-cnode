<template>
    <div>
        <div class="user-view" v-show="isLoaded">
            <User :user="author" v-if="author"></User>
            <div class="sideBarList">
                <UserIntro :author="author" title="个人信息"></UserIntro>
            </div>
        </div>
        <div  v-show="!isLoaded" class="loading">
            <img src="../assets/img/blue-longcat-spinner.gif" alt="">
        </div>
    </div>
</template>

<script>

    import User from "@/components/User";
    import UserIntro from "@/components/UserIntro";
    import axios from "axios";


    export default {
        name: "UserView",
        components: {UserIntro, User},
        provide() {
            return {
                UserView: this
            }
        },
        data() {
            return {
                author: null,
                loaded: false
            }
        },
        computed: {
            isLoaded() {
                return this.loaded && this.author;
            }
        },
        methods: {
            getData() {
                axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.id}`)
                    .then(response => {
                        this.author = response.data.data;
                    })
            }
        },
        watch: {
            '$route'(to, from) {
                this.getData()
            },

        },
        created() {
            this.getData()
            this.$on("loaded",() => {
                this.loaded = true
            })
        }
    }
</script>

<style scoped>
    .user-view {
        display: flex;
    }
    .sideBarList {
        width: 290px;
        margin-left: 20px;
    }

    .user {
        flex: 1;
        width: 0;
    }
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
