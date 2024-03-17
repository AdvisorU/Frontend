<template>
    <main>
        <div class="title">
            <a-button type="link" size="large" @click="$router.replace('/')">< Back</a-button>
            <p>{{ chat.title || "New chat" }}</p>
        </div>
        <div class="history">
            <Message v-for="message in messages" :key="message.id" :message="message.message" :type="message.type" />
        </div>
        <div class="input">
            <div class="wrapper">
                <textarea type="text" placeholder="Type a message" autofocus rows="1" ref="input"></textarea>
                <div class="send">
                    <a-button type="primary">
                        <template #icon>
                            <SendOutlined />
                        </template>
                    </a-button>
                </div>
            </div>
            <div class="background"></div>
        </div>
    </main>
</template>

<script>
import { SendOutlined } from '@ant-design/icons-vue'

import { Api } from "@/api/api";
import Message from '@/components/chat/Message.vue'

export default {
    name: 'ChatView',
    components: {
        Message,
        SendOutlined,
    },
    data() {
        return {
            chat: {},
            messages: [],
        };
    },
    mounted() {
        this.resizeTextarea()
        this.$refs.input.addEventListener('input', this.resizeTextarea)

        Api.chat.index.get(this.$route.params.id).then(res => {
            if (res.code == 0) {
                this.chat = res.data
            }
        })
        
        Api.chat.comment.get(this.$route.params.id, 0, 10).then(res => {
            if (res.code == 0) {
                this.messages = res.data
            }
        })
    },
    methods: {
        resizeTextarea() {
            this.$refs.input.style.height = 'auto';
            this.$refs.input.style.height = (this.$refs.input.scrollHeight + 3) + 'px'
        }
    }
}
</script>

<style scoped>
main {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.title>.ant-btn {
    position: absolute;
    left: 0;
}

.title>p {
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
}

.history {
    width: 100%;
    flex: auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-bottom: 5px;
}

.input {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.input>.wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 7px;
    background: white;
    margin-bottom: 16px;
}

.input>.wrapper>textarea {
    max-height: 30vh;
    flex: auto;
    height: fit-content;
    margin: 12px 0;
    padding: 0 16px;
    border: none;
    border-radius: 7px 0 0 7px;
    resize: none;
}

.input>.wrapper>textarea:focus {
    outline: none;
}

.input>.wrapper>.send {
    margin: 12px;
}

.input>.background {
    height: 20%;
    width: 100%;
    position: absolute;
    top: -18%;
    left: 0;
    background: linear-gradient(0deg, #f0f0f0 40%, transparent);
}
</style>
