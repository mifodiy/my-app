import axios from "axios";

const items = axios.create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {"API-KEY": "b1ae9ead-f45f-4043-a7ce-212f583e09f0"}
    }
)

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return items.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    }
}

export const followUsersAPI = {
    follow(id){
        return items.post(`follow/${id}`)
    },
    unfollow(id){
        return items.delete(`follow/${id}`)
    }
}

export const authUserAPI = {
    checkAuth(){
        return items.get(`auth/me`)
    }
}