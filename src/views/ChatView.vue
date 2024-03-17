<template>
    <main>
        <div class="title">
            <a-button type="link" size="large" @click="$router.replace('/')">< Back</a-button>
            <p>{{ chat.title || "New chat" }}</p>
        </div>
        <div class="history">
            <Message v-for="message in messages" :key="message.id" :message="message.content" :type="message.role" />
        </div>
        <div class="input">
            <div class="wrapper">
                <textarea type="text" placeholder="Type a message" autofocus rows="1" ref="input" v-model="input"></textarea>
                <div class="send">
                    <a-button type="primary" :disabled="input.trim() === ''" @click="sendMessage">
                        <template #icon>
                            <SendOutlined />
                        </template>
                    </a-button>
                </div>
            </div>
            <div class="background"></div>
        </div>
        <div v-if="loading_chat_info || loading_chat_comments" class="loading">
            <a-spin tip="Loading..." />
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
            input: '',
            chat: {},
            messages: [],
            loading_chat_info: true,
            loading_chat_comments: true,
        };
    },
    mounted() {
        this.resizeTextarea()
        this.$refs.input.addEventListener('input', this.resizeTextarea)
        this.$refs.input.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                this.sendMessage()
            }
        })

        Api.chat.index.get(this.$route.params.id).then(res => {
            this.loading_chat_info = false
            if (res.code == 0) {
                this.chat = res.data
            }
        })
        
        Api.chat.comment.get(this.$route.params.id, 0, 100).then(res => {
            this.loading_chat_comments = false
            if (res.code == 0) {
                this.messages = res.data
                console.log(this.messages)
            }
        })
    },
    methods: {
        resizeTextarea() {
            this.$refs.input.style.height = 'auto';
            this.$refs.input.style.height = (this.$refs.input.scrollHeight + 3) + 'px'
        }, 
        sendMessage() {
            if (this.input.trim() === '') return

            this.messages.push({
                content: this.input,
                role: 'USER',
            })

            Api.chat.comment.post(this.$route.params.id, this.input).then(res => {
                if (res.code == 0) {
                    this.messages.push(res.data)
                    this.resizeTextarea()
                }
            })
            
            this.input = ''
            setTimeout(this.resizeTextarea, 50)
        }
    }
}
</script>

<style scoped>
main {
    position: relative;
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

.loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
}
</style>
