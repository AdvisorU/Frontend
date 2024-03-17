<template>
    <main>
        <div class="history">
            <h1>ChatHistory</h1>
        </div>
        <div class="input">
            <div class="wrapper">
                <textarea type="text" placeholder="Type a message" rows="1"></textarea>
                <a-button type="primary">
                    <template #icon>
                        <SendOutlined />
                    </template>
                </a-button>
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
    background: blue;
}

.input {
    width: 100%;
    height: 72px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.input>.wrapper {
    width: 90%;
    height: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 7px;
    background: white;
}

.input>.wrapper>textarea {
    flex: auto;
    height: fit-content;
    padding: 0 8px;
    border: none;
    border-radius: 7px 0 0 7px;
    resize: none;
}

.input>.wrapper>textarea:focus {
    outline: none;
}

.input>.wrapper>button {
    width: 15%;
    height: 100%;
    border: none;
    border-radius: 0 7px 7px 0;
}
</style>
