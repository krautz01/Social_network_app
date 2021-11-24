const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: "Hi, wie geht's euch?", likesCount: 12 },
                { id: 2, message: "Das ist meine erste Nachricht", likesCount: 11 },
                { id: 3, message: 'Hallo!', likesCount: 5 },
                { id: 4, message: "Na ja", likesCount: 8 },
            ],
            newPostText: 'Hallo!',
        },
        
        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Angela' },
                { id: 2, name: 'Ervin' },
                { id: 3, name: 'Klaus' },
                { id: 4, name: 'Nico' },
            ],

            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: "Wie geht's?" },
                { id: 3, message: 'Es ist so kalt!' },
                { id: 4, message: 'Hi!' },
            ],

            newMessageBody: ''
    
        },
    
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state; 
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 5, message: body },);
            this._callSubscriber(this._state);
        }
    }
    
}

export const addPostActionCreator = () =>({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () =>({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store; 