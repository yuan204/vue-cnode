<template>
    <div class="user" >
        <UserHome :author="user" :topics="topics"></UserHome>
        <UserTopics :posts="user.recent_topics" class="user-topics">
            <template #header>
                <p>最近创建的话题</p>
            </template>
        </UserTopics>
        <UserTopics :posts="user.recent_replies" class="user-topics">
            <template #header>
                <p>最近参与的话题</p>
            </template>
        </UserTopics>
    </div>
</template>

<script>
    import UserHome from "@/components/UserHome";
    import axios from "axios";
    import UserTopics from "@/components/UserTopics";


    export default {
        name: "User",
        components: {UserTopics, UserHome},
        inject:["UserView"],
        props: {
            user: {
                type: Object,
            },

        },
        data() {
            return {
                // user: null,
                topics:[]
            }
        },
        watch: {
            user() {
                this.getData()
            }
        },
        methods: {
           getData() {
               // axios.get(`https://cnodejs.org/api/v1/user/${this.userId}`)
               //     .then(response => {
               //         this.user = response.data.data;
               axios.get(`https://cnodejs.org/api/v1/topic_collect/${this.user.loginname}`).then((response) => this.topics = response.data.data)
                           .then(() =>   this.UserView.$emit("loaded"))
                   }
           // }
        },
        created() {
            this.getData()
        }


    }
</script>

<style scoped>
.user-topics {
    margin-top: 20px;
}
</style>
