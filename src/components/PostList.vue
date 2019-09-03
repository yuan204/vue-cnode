<template>
        <div class="post-list">
               <Post  v-for="post in posts" :key="post.id" :post="post"></Post>
        </div>
</template>

<script>
    import axios from "axios";
    import Post from "@/components/Post";





    export default {
        name: "PostList",
        components: {Post},
        props: ["page","tab"],
        inject:["HomeView"],
        data() {
            return {
                posts: [],

            }
        },
        methods: {
            getData() {
                axios.get(`https://cnodejs.org/api/v1/topics?tab=${this.tab}&page=${this.page}`)
                    .then(response => {
                        this.posts = response.data.data
                        this.HomeView.$emit("loaded")

                    })
            }
        },
        watch: {
            page() {
                this.getData()
            },
            tab() {
                this.getData()
            }
        },
        created() {
           this.getData()
        }
    }
</script>

<style scoped>
    @import "../style/reset.css";
    .post-list {

        background-color: #fff;
    }


</style>
