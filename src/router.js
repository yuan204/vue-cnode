import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Topic from "@/views/Topic";
import User from "@/views/User";
import Login from "@/views/Login";
import Messages from "@/views/Messages";
import Collection from "@/views/Collection";
import Create from "@/views/Create";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: Topic

    },
    {
      path: '/user/:id',
      name: 'user',
      component: User

    },
    {
      path:"/login",
      name:"login",
      component: Login
    },
    {
      path: "/my/messages",
      name: "messages",
      component: Messages
    },
    {
      path: "/user/:user/collections",
      name: "collections",
      component: Collection
    },
 {
   path: "/create",
       name: "create",
     component:  Create
 }
  ]
})
