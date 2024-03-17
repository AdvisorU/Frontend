<template>
    <main>
        <a-button type="primary" size="large" @click="newChat" :loading="loading_new_chat">
            <template #icon>
                <PlusOutlined />
            </template>
            New Chat
        </a-button>
        <ChatCard v-for="chat in data" :key="chat.id" :chat="chat" />
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
            loading_new_chat: false,
        };
    },
    mounted() {
        Api.chat.list(0, 10).then(res => {
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
    height: 100%;
    display: flex;
    padding: 10px;
    overflow: auto;
}

.ant-btn {
    margin-bottom: 10px;
}
</style>
