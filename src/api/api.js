import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "b0f3e44f-906e-48ab-9f87-b437f2731bec" },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },
    getProfile(userID) {
        console.log('Obsolete method. Flease profileAPI object.')
        return profileAPI.getProfile(userID)
    }
};

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/` + userID)
    },

    getStatus(userID) {
        return instance.get(`profile/status/` + userID)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status})
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe= false ) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};
