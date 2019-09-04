import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Spirit from 'spirit-ui';
import 'spirit-ui/dist/spirit-ui.css';
import store from "@/store";
import axios from "axios";
import "./style/common.css"
import "./style/reset.css"
import 'simplemde/dist/simplemde.min.css'
Vue.use(Spirit)
Vue.config.productionTip = false
import moment from "moment";
Vue.filter("fromNow",function (lastReply) {
  moment.locale("zh-cn");
  return moment(new Date(lastReply)).fromNow()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (localStorage.access_token) {

  axios.post("https://cnodejs.org/api/v1/accesstoken",{
    accesstoken: localStorage.access_token
  }).then(response => {
    store.commit("login",
        {accessToken:localStorage.access_token,
          loginname:response.data.loginname}
    )
    getMessageCount()
    getCollections(response.data.loginname)
  })

}

function getMessageCount() {
  axios.get(`https://cnodejs.org/api/v1/message/count?accesstoken=${localStorage.access_token}`)
      .then(response => {
        store.commit("updateMessageCount",response.data.data)
      })
}

function getCollections(loginname) {
  axios.get(`https://cnodejs.org/api/v1/topic_collect/${loginname}`)
      .then(response => {
        store.commit("updateCollections",response.data.data)
      })
}




