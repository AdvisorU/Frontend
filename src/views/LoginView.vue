<template>
    <main>
        <h1>Login</h1>
        <a-form @submit="handleSubmit">
            <a-form-item>
                <a-input v-model:value="form.email" placeholder="Email" autocomplete="email">
                    <template #prefix>
                        <MailOutlined />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input-password v-model:value="form.password" placeholder="Password" autocomplete="current-password">
                    <template #prefix>
                        <KeyOutlined />
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="handleSubmit" :loading="loading">
                    Login
                </a-button>
            </a-form-item>
        </a-form>
    </main>
</template>

<script>
import { Api } from "@/api/api";
import { message } from 'ant-design-vue';
import { MailOutlined, KeyOutlined } from '@ant-design/icons-vue';

export default {
    name: 'LoginView',
    components: {
        MailOutlined,
        KeyOutlined,
    },
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            loading: false,
        };
    },
    methods: {
        handleSubmit() {
            this.loading = true;
            Api.user.loginWithEmail(this.form.email, this.form.password)
                .then((res) => {
                    if (res.code == 0) {
                        this.$router.push({ path: "/" });
                    } else {
                        this.loading = false;
                        this.$message.error(res.message);
                    }
                })
                .catch((err) => {
                    this.loading = false;
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 2rem;
    font-weight: 400;
    color: #333;
    text-align: center;
}

.ant-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ant-form-item:not(:last-child) {
    width: 240px;
}
</style>
