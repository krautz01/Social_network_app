import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store; 