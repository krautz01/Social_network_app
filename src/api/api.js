import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "b0f3e44f-906e-48ab-9f87-b437f2731bec"},
})

export const usersAPI = {
    getUsers(currentPage=1, pageSize=6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data);
    }
}

export const getUsers2 = (currentPage=1, pageSize=6) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`
    ).then(response => response.data);
}