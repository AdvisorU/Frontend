<template>
    <div class="chat-card" ref="card">
        <div class="info">
            <span class="title">{{ chat.title || "New Chat" }}</span>
            <span class="time">{{ time }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatCard',
    props: ['chat'],
    computed: {
        time() {
            return new Date(this.chat.updated_at).toLocaleString()
        }
    },
    mounted() {
        this.$refs.card.addEventListener('click', () => {
            this.$router.push(`/chat/${this.chat.id}`)
        })
    }
}
</script>

<style scoped>
.chat-card {
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 7px;
    background: white;
    margin-bottom: 12px;
    cursor: pointer;
}

.info {
    display: flex;
    flex-direction: column;
}

.chat-card:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.info > .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
}

.info > .time {
    font-size: 14px;
    color: #666;
}
</style>
