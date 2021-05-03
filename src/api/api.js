import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API_KEY' : '7840000c-a540-4bcf-8991-0b882f3ea8a2' },
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    follow(usersId) {
        return instance.post(`follow/${usersId}`)
    },
    unfollow(usersId) {
        return instance.delete(`follow/${usersId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
   me() {
       return instance.get(`auth/me`)
   }
}