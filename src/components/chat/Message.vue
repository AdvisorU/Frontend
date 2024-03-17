<template>
    <div :class="['message', type]">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: ['message', 'type']
}
</script>

<style scoped>
.message {
    max-width: 70%;
    margin-bottom: 10px;
    padding: 10px 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    position: relative;
    word-wrap: break-word;
}

.message.ASSISTANT {
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
    align-self: flex-start;
    margin-left: 7px;
    border-radius: 18px 18px 18px 0;
}

.message.USER {
    background-color: white;
    align-self: flex-end;
    color: #007bff;
    margin-right: 7px;
    border-radius: 18px 18px 0 18px;
}

.message p {
    margin: 0;
    padding: 0;
}
</style>
