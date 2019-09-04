<template>
    <div class="create">
        <div class="content">
            <h3>发布话题</h3>
            <s-form ref="formInline" :model="formInline" :rules="ruleInline">
                <s-form-item label="选择板块">
                    <s-select v-model="board">
                        <s-option v-for="item in options" :key="item.value" :value="item.value"
                                  :label="item.label"></s-option>
                    </s-select>
                </s-form-item>
                <s-form-item prop="title" class="title">
                    <s-input type="text" v-model="formInline.title" placeholder="标题字数十字以上">
                    </s-input>
                </s-form-item>
                <s-form-item prop="editor" class="editor">
                    <textarea v-model="formInline.editor" id="markdownEditor"></textarea>
                </s-form-item>
                <s-form-item class="btn">
                    <s-button type="primary" @click="handleSubmit('formInline')">发布</s-button>
                </s-form-item>
            </s-form>

        </div>
        <div class="sideBarList">
            <SideBar>
                <template #header>Markdown 语法参考</template>
                <template #content>
                    <p>### 单行的标题</p>
                    <p>**粗体**</p>
                    <p>`console.log('行内代码')`</p>
                    <p>```js\n code \n``` 标记代码块</p>
                    <p>[内容](链接)</p>
                    <p>![文字说明](图片链接)</p>
                    <p>
                        <a href="https://segmentfault.com/markdown" target="_blank">Markdown 文档</a>
                    </p>
                </template>
            </SideBar>
        </div>

    </div>
</template>

<script>
    import SimpleMDE from "simplemde";
    import SideBar from "@/components/SideBar";


    export default {
        name: "Create",
        components: {SideBar},
        data() {
            return {
                board: "share",
                simplemde: null,
                options: [{
                    value: 'share',
                    label: '分享'
                }, {
                    value: 'ask',
                    label: '问答'
                }, {
                    value: 'job',
                    label: '招聘'
                }],
                formInline: {
                    editor: "",
                    title: ""
                },
                ruleInline: {

                    title: [
                        {required: true, message: '必需填写标题', trigger: 'change'},
                        {type: 'string', min: 10, message: '标题至少十个字', trigger: 'change'}
                    ],
                    editor: [
                        {required: true, message: '必需填写内容', trigger: 'change'},

                    ]
                }
            }
        },
        methods: {
            publish() {
                this.$message({
                    type: "error",
                    message: "发布主题的接口已被cnode社区下线，所以该功能暂时无法使用",
                    duration: 1000
                })
            },
            handleSubmit(name) {
                this.$refs[name].validate(this.publish, this.publish)
            }
        },

        mounted() {
            this.simplemde = new SimpleMDE({element: document.getElementById("markdownEditor")});
        }
    }
</script>

<style scoped>
    .create {
        display: flex;
        font-size: 14px;
    }

    .content {
        background-color: #fff;
        padding: 20px;
        flex: 1;
        width: 0;

    }

    .title, .editor,.btn {
        margin-left: -15px;
    }

    h3 {
        margin-bottom: 20px;
    }

    .sideBarList {
        width: 290px;
        margin-left: 20px;
    }

    p {
        padding: 5px;
    }

    a {
        color: #778087;
    }
    .btn {
        margin-top: 20px;
    }


</style>
