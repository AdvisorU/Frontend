import { get, post } from "@/utils/Request"
import { baseUrl, defaultCallback } from "@/api/api"

export const commentGet = (id, offset, limit) => {
    return get(`${baseUrl}/chat/comment?id=${id}&offset=${offset}&limit=${limit}`, defaultCallback)
}

export const commentPost = (id, content) => {
    return post(`${baseUrl}/chat/comment/`, {
        id, 
        content
    }, defaultCallback)
}

export const indexGet = (id) => {
    return get(`${baseUrl}/chat/?id=${id}`, defaultCallback)
}

export const indexPost = () => {
    return post(`${baseUrl}/chat/`, {}, defaultCallback)
}

export const list = (offset, limit) => {
    return get(`${baseUrl}/chat/list?offset=${offset}&limit=${limit}`, defaultCallback)
}

export default {
    comment: {
        get: commentGet,
        post: commentPost
    },
    index: {
        get: indexGet, 
        post: indexPost
    }, 
    list
}
