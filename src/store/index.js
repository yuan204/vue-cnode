import Vue from 'vue'
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        accessToken:  localStorage.access_token || "",
        user: null,
        messageCount: 0,
        collections:[]
    },
    getters:{
        isLogin(state) {
            return state.accessToken !== ""
        }
    },
    mutations: {
        login(state,payload) {
            state.accessToken = payload.accessToken
            axios.get(`https://cnodejs.org/api/v1/user/${payload.loginname}`)
                .then(response => {
                    console.log(response);
                    state.user = response.data.data;
                })
            localStorage.setItem("access_token",payload.accessToken)
        },
        exit(state) {
            state.accessToken = ""
            localStorage.removeItem("access_token")
        },
        updateMessageCount(state,messageCount) {
            state.messageCount = messageCount
        },
        updateCollections(state,collections) {
            state.collections = collections
        }
    }
})

export default store
