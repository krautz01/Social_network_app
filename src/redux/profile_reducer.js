const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        { id: 1, message: "Hi, wie geht's euch?", likesCount: 12 },
        { id: 2, message: "Das ist meine erste Nachricht", likesCount: 11 },
        { id: 3, message: 'Hallo!', likesCount: 5 },
        { id: 4, message: "Na ja", likesCount: 8 },
    ],
    newPostText: 'Hallo!',
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () =>({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;