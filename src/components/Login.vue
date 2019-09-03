<template>

    <div class="login">
        <s-form ref="formInline" :model="formInline" :rules="ruleInline" inline class="form">
            <s-form-item prop="accessToken">
                <s-input type="text" v-model="formInline.accessToken">
                </s-input>
            </s-form-item>
            <s-form-item class="form-item-btn">
                <s-button type="primary" @click="handleSubmit('formInline')" >登录</s-button>
            </s-form-item>
        </s-form>
    </div>
</template>

<script>
    import axios from "axios";


    export default {
        name: "Login",
        data () {
            return {
                formInline: {
                    accessToken:""
                },
                ruleInline: {
                    accessToken: [
                        { required: true, message: 'Please fill in the accessToken', trigger: 'change' }
                    ]
                },

            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(() => {
                    axios.post("https://cnodejs.org/api/v1/accesstoken",{
                        accesstoken: this.formInline.accessToken
                    }).then(response => {
                        this.$store.commit("login",
                            {accessToken:this.formInline.accessToken,
                                loginname:response.data.loginname}
                                )
                        // const loginname = response.data.data.loginname;
                        // console.log(response.data);
                        this.$router.push({name:"home"})
                        this.success()

                    },this.fail)
                }, this.fail)
            },
            success() {
                this.$message({
                    message: '登录成功',
                    type: 'success',
                    duration:1000
                });
            },
            fail() {
                this.$message({
                    message: '登录失败',
                    type: 'error',
                    duration:1000
                });
            }
        }
    }
</script>

<style scoped>
  .login {
      width: 300px;
      margin: 100px auto;
      background-color: #444444;
      padding: 80px 30px;
  }
    .form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .form-item-btn {
       margin-top: 20px;
    }
    .s-button {
        width: 100%;
    }

</style>
