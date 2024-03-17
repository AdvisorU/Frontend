import user from "@/api/user"

import { message } from 'ant-design-vue';

export const baseUrl = import.meta.env.VITE_API_BASE_URL

export const defaultCallback = {
    succeed: (res) => {
        if(res.code != 0) {
            message.error(res.message)
        }
        return res
    }, 
    failed: (res) => {
        message.error(res.message || "Failed to request")
        return res
    },
    network_error: (err) => {
        message.error("Network Error")
        return err
    }
}

export const Api = {
    user
}