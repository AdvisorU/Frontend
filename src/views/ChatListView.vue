<template>
    <main>
        <a-button type="primary" size="large" @click="newChat" :loading="loading_new_chat">
            <template #icon>
                <PlusOutlined />
            </template>
            New Chat
        </a-button>
        <ChatCard v-for="chat in data" :key="chat.id" :chat="chat" />
        <div v-if="loading_chat_list" class="loading">
            <a-spin tip="Loading..." />
        </div>
    </main>
</template>

<script>
import { PlusOutlined } from '@ant-design/icons-vue'

import { Api } from "@/api/api";
import ChatCard from '@/components/chat/ChatCard.vue'

export default {
    name: 'ChatListView',
    components: {
        ChatCard,
        PlusOutlined,
    },
    data() {
        return {
            data: [],
            loading_chat_list: true,
            loading_new_chat: false,
        };
    },
    mounted() {
        Api.chat.list(0, 100).then(res => {
            this.loading_chat_list = false
            if (res.code == 0) {
                this.data = res.data
            }
        })
    },
    methods: {
        newChat() {
            this.loading_new_chat = true
            Api.chat.index.post().then(res => {
                console.log(res)
                if (res.code == 0) {
                    console.log(res.data)
                    this.$router.push(`/chat/${res.data.id}`)
                }
                this.loading_new_chat = false
            })
        }
    }
}
</script>

<style scoped>
main {
    position: relative;
    height: 100%;
    display: flex;
    padding: 10px;
    overflow: auto;
}

.ant-btn {
    margin-bottom: 10px;
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
