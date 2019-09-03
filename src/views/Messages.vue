<template>
    <div>
        <NotRead :messages="notReadMessages"></NotRead>
        <Readed :messages="readedMessages" class="readed"></Readed>
    </div>
</template>

<script>
    import NotRead from "@/components/message/NotRead";
    import axios from "axios";
    import Readed from "@/components/message/Readed";


    export default {
        name: "Messages",
        components: {Readed, NotRead},
        data() {
            return {
                notReadMessages: [],
                readedMessages: []
            }
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                axios.get(`https://cnodejs.org/api/v1/messages?accesstoken=${vm.$store.state.accessToken}`).then(response => {

                    vm.notReadMessages = response.data.data.hasnot_read_messages
                    vm.readedMessages = response.data.data.has_read_messages
                })
            })
        }

    }
</script>

<style scoped>
.readed {
    margin-top: 20px;
}
</style>
