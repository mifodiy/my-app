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
    },
    singIn(email, password, rememberMe = false, captcha = null){
        return items.post(`auth/login`,{email, password, rememberMe, captcha})
    },
    singOut(){
        return items.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return items.get(`security/get-captcha-url`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return items.get(`profile/`+userId)
    },
    getStatus(userId) {
        return items.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return items.put(`profile/status`, {status})
    },
    uploadPhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);

        return items.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfileInfo(data){
        return items.put('profile', data)
    }
}