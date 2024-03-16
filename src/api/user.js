import { get, post } from "@/utils/Request"
import { baseUrl, defaultCallback } from "@/api/api"

export const info = () => {
    return get(baseUrl + "/user/info", defaultCallback)
}

export const loginWithEmail = (email, password) => {
    return post(baseUrl + "/user/login", {type: 0, email, password}, defaultCallback)
}

export default {
    info,
    loginWithEmail
}
