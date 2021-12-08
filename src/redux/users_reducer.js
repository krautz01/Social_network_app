const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [/* 
            {
                id: 1, 
                photoURL: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360515_youloveit_ru_dipper_gravity_falls_na_avu02.jpg',
                followed: true, 
                fullName: "Hans", 
                status: "Ich bin Ingeneur", 
                location: { city: 'Konigsberg', country: 'Germany' }
            },
            {
                id: 2, 
                photoURL: 'https://www.youloveit.ru/uploads/posts/2020-04/1586363751_youloveit_ru_meibl_gravity_falls_na_avu16.jpg',
                followed: true, 
                fullName: "Marta", 
                status: "Ich bin Ingeneur", 
                location: { city: 'Milan', country: 'Italy' }
            },
            {
                id: 3, 
                photoURL: 'https://www.youloveit.ru/uploads/posts/2020-04/1586361975_youloveit_ru_wendy_gravity_falls_na_avu09.jpg',
                followed: false, 
                fullName: "Luisa", 
                status: "Ich bin Ingeneur", 
                location: { city: 'Berlin', country: 'Germany' }
            },
            {
                id: 4, 
                photoURL: 'https://slovnet.ru/wp-content/uploads/2018/09/1-61.jpg',
                followed: false, 
                fullName: "Erika", 
                status: "Ich bin Ingeneur", 
                location: { city: 'Berlin', country: 'Germany' }
            }, */
        ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID })
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;