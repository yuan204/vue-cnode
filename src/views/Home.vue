<template>
  <div>
    <div class="home-container" v-show="loaded">
      <div class="home" >
        <nav>
          <ul>
            <li>
              <router-link :to="{name:'home',query:{tab:'all'}}" :class="{active : $route.query.tab === undefined || $route.query.tab === 'all'}">全部</router-link>
            </li>
            <li>
              <router-link :to="{name:'home',query:{tab:'good'}}">精华</router-link>
            </li>
            <li>
              <router-link :to="{name:'home',query:{tab:'share'}}">分享</router-link>
            </li>
            <li>
              <router-link :to="{name:'home',query:{tab:'ask'}}">问答</router-link>
            </li>
            <li>
              <router-link :to="{name:'home',query:{tab:'job'}}">招聘</router-link>
            </li>
          </ul>
        </nav>
        <PostList :page="$route.query.page ? $route.query.page : 1" :tab="$route.query.tab ? $route.query.tab : 'all'"></PostList>
        <s-page :total="total" :page-size="20" class="pages" @current-page="handleCurrentPage"
                :current-page.sync="page"
        ></s-page>
      </div>
      <div class="sidebar">
        <UserIntro v-if="$store.getters.isLogin" :author="$store.state.user" title="个人信息"></UserIntro>
        <Login  v-else></Login>
      </div>
    </div>
    <div  v-show="!loaded" class="loading">
      <img src="../assets/img/blue-longcat-spinner.gif" alt="">
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

import PostList from "@/components/PostList";
import axios from "axios";
import Login from "@/components/sidebar/Login";
import UserIntro from "@/components/UserIntro";





export default {
  name: 'home',
  components: {
    UserIntro,
    Login,
    PostList,

  },
  provide() {
    return {
      HomeView:this
    }
  },
  data() {
    return {
      total:10000,
      page:1,
      loaded: false
    }
  },
  watch: {
    "$route.query.tab"() {
      this.page = 1
    }
  },
  methods: {
    handleCurrentPage(curPage) {
      this.$router.push({name:"home",query:{tab:this.$route.query.tab,page:curPage}})
    }
  },
  created() {
    this.$on("loaded",() => {
      this.loaded = true
    })
  }

}
</script>

<style scoped>
   nav {
     background-color: #F6F6F6;
     padding: 10px;
   }
   nav ul {
     display: flex;
   }
   nav ul li {
     margin: 0 10px;

   }
  .pages {
    background-color: #fff;
    padding:10px 0;
  }
  a {
    color: #80bd01;
    font-size: 14px;
    padding: 5px;
    display: inline-block;
  }
  .router-link-exact-active,.active {
    background-color: #80bd01;
    color: white;
  }
  .home-container {
    display: flex;
  }
   .sidebar {
     width: 290px;
     margin-left: 20px;
   }
   .home {
     flex: 1;
     width: 0;
   }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
