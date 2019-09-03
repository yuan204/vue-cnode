<template>
    <div class="collection">
        <header>
            <router-link :to="{name:'home'}">主页</router-link> / {{$route.params.user}} 收藏的话题
        </header>
      <ul class="topics">
          <Post v-for="topic in topics" :post="topic" :key="topic.id"></Post>
      </ul>
    </div>
</template>

<script>
    import axios from "axios";
    import Post from "@/components/Post";
    export default {
        name: "Collection",
        components: {
            Post,
        },
        data() {
            return {
                topics: []
            }
        },
        created() {
            axios.get(`https://cnodejs.org/api/v1/topic_collect/${this.$route.params.user}`)
                .then(response =>  this.topics = response.data.data)
        }
    }
</script>

<style scoped>
    header {
        background-color: #F6F6F6;
        padding: 5px;
    }
.topics {
    background-color: #fff;
}
header {
    color: #999;
    font-size: 14px;
}
    header a {
        color: #80bd01;
    }
</style>
