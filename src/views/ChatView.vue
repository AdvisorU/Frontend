<template>
    <main>
        <div class="history">
            <h1>ChatHistory</h1>
        </div>
        <div class="input">
            <div class="wrapper">
                <textarea type="text" placeholder="Type a message" rows="1" ref="input"></textarea>
                <div class="send">
                    <a-button type="primary">
                        <template #icon>
                            <SendOutlined />
                        </template>
                    </a-button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { SendOutlined } from '@ant-design/icons-vue'

export default {
    name: 'ChatView',
    components: {
        SendOutlined,
    },
    mounted() {
        this.resizeTextarea()
        this.$refs.input.addEventListener('input', this.resizeTextarea)
    },
    methods: {
        resizeTextarea() {
            this.$refs.input.style.height = 'auto';
            this.$refs.input.style.height = (this.$refs.input.scrollHeight + 3) + 'px'
        }
    }
};
</script>

<style scoped>
main {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.history {
    width: 100%;
    flex: auto;
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    min-height: 72px;
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
</style>
