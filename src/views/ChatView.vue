<template>
    <main>
        <div class="history">
            <div class="message user">
                <p>Hi! I am a computer science student! What courses should I take for my first semester</p>
            </div>
            <div class="message advisor">
                <p>You should take the following courses: CS1800, CS1802, CS2500, CS2501, MATH1365, ENGW1111</p>
            </div>
            <div class="message user">
                <p>Could I not take MATH1365 and switch it up with something else?</p>
            </div>
            <div class="message advisor">
                <p>Yes, you are welcome to take MATH 1341 with the rest. You will be take the following courses: CS1800, CS1802, CS2500, CS2501, MATH1341, ENGW1111.</p>
            </div>
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
    margin: auto;
    overflow: auto;
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

.message {
    max-width: 90%;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 18px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    position: relative;
    word-wrap: break-word;
}

.message.advisor {
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
    align-self: flex-start;
}

.message.user {
    background-color: white;
    text-align: right;
    align-self: flex-end;
    color: #007bff;
}

.message p {
    margin: 0;
    padding: 0;
}

</style>
