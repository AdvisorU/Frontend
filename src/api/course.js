import { get, post } from "@/utils/Request"
import { baseUrl, defaultCallback } from "@/api/api"

export const index = (id) => {
    return get(`${baseUrl}/course/?id=${id}`, defaultCallback)
}

export const list = (major, keywords, offset, limit) => {
    return get(`${baseUrl}/course/list?major=${major}&keywords=${keywords}&offset=${offset}&limit=${limit}`, defaultCallback)
}

export default {
    index, 
    list
}
