import { defineStore } from 'pinia'

import { Api } from '@/api/api'

export const useUserProfile = defineStore('userProfile', {
    state: () => ({
        profile: null
    }),
    actions: {
        async fetchAndSetUserProfile() {
            const res = await Api.user.info()
            if (res.code === 0) {
                this.profile = res.data
                console.debug("userProfile", this.profile)
            }
        }
    }
})
